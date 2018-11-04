import java.util.ArrayList;

public class Cryptogram {

    private final ArrayList<Integer> symbols;

    public Cryptogram(String line){
        this.symbols = new ArrayList<>();
        for (String symbol : line.split(" ")) symbols.add(Integer.parseInt(symbol, 2));
    }

    public int getSymbol(int i) {
        if (i < symbols.size()) return symbols.get(i);
        else return 32;
    }

    public int getLength() {
        return symbols.size();
    }

    public String toString(){
        return symbols.toString();
    }
}