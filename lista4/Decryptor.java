import util.MapUtil;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

public class Decryptor {

    private TreeMap<Integer, Integer> symbols;
    private ArrayList<Cryptogram> cryptograms;
    private ArrayList<Integer> key;

    public Decryptor(String symbolListPath, String cryptogramListPath) throws IOException {
        symbols = new TreeMap<>();
        cryptograms = new ArrayList<>();
        readSymbols(symbolListPath);
        readCryptograms(cryptogramListPath);
    }

    private void readSymbols(String filePath) throws FileNotFoundException {
        FileReader reader = new FileReader(filePath);
        Scanner scanner = new Scanner(reader);

        while(scanner.hasNext()) {
            String line = scanner.nextLine();
            Integer character = (int) line.charAt(0);
            Integer value = Integer.parseInt(line.substring(1).split(" ")[1]);
            symbols.put(character, value);
        }
    }

    private void readCryptograms(String filePath) throws FileNotFoundException {
        FileReader reader = new FileReader(filePath);
        Scanner scanner = new Scanner(reader);

        while(scanner.hasNext()) {
            String line = scanner.nextLine();
            Cryptogram cryptogram = new Cryptogram(line);
            cryptograms.add(cryptogram);
        }
    }

    public void findKey() {
        Integer maxSize = getLongestCryptogramLength();
        key = new ArrayList<>();

        for (int i = 0; i < maxSize; i++) {
            HashMap<Integer, Integer> candidate = new HashMap<>();
            ArrayList<Cryptogram> currentCryptograms = getCryptogramsLongerThan(i);
            for (Cryptogram cryptogram : currentCryptograms) {
                for (Integer symbol : symbols.keySet()) {
                    Integer keySymbol = (cryptogram.getSymbol(i) ^ symbol);
                    Integer value = symbols.get(symbol);
                    if (candidate.containsKey(keySymbol)) candidate.put(keySymbol, candidate.get(keySymbol) + value);
                    else candidate.put(keySymbol, value);
                }
            }
            candidate = MapUtil.sortByValue(candidate);
            key.add(findBestKey(candidate, i));
        }

//        System.out.println(key.toString());
    }

    private int findBestKey(Map<Integer, Integer> candidate, int position) {
        Integer bestSymbol = 32;
        Integer maxCounter = 0;
        ArrayList<Cryptogram> activeCryptograms = getCryptogramsLongerThan(position);
        for (Integer keySymbol : candidate.keySet()) {
            int counter = 0;
            for (Cryptogram cryptogram : activeCryptograms) {
                if (isValid(cryptogram.getSymbol(position) ^ keySymbol)) counter++;
            }
            if(counter > maxCounter) {
                maxCounter = counter;
                bestSymbol = keySymbol;
            }
            if (counter >= cryptograms.size()) return keySymbol;
        }
        return bestSymbol;
    }

    private boolean isValid(int symbol) {
        return symbols.keySet().contains(symbol);
    }

    private ArrayList<Cryptogram> getCryptogramsLongerThan(int position) {
        ArrayList<Cryptogram> longer = new ArrayList<>();
        for(Cryptogram cryptogram : cryptograms) {
            if(position < cryptogram.getLength()) longer.add(cryptogram);
        }
        return longer;
    }

    private Integer getLongestCryptogramLength(){
        int longest = 0;
        for(Cryptogram cryptogram : cryptograms) {
            if(cryptogram.getLength() > longest) longest = cryptogram.getLength();
        }
        return longest;
    }

    public List<String> decryptMessages(){
        if (key == null){
            findKey();
        }
        List<String> messages = new LinkedList<>();
        for (Cryptogram cryptogram : cryptograms) {
            StringBuilder decryptedMessage = new StringBuilder();
            for (int i = 0 ; i < cryptogram.getLength(); i++) {
                decryptedMessage.append((char) (cryptogram.getSymbol(i) ^ key.get(i)));
            }
            messages.add(decryptedMessage.toString());
        }
        return messages;
    }
}