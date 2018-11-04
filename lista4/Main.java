import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

public class Main {

    public static void main(String[] args) throws FileNotFoundException {
        try {
            Decryptor decryptor = new Decryptor("/home/ana/IdeaProjects/First/src/symbols.txt", "/home/ana/IdeaProjects/First/src/cryptograms.txt");
            List<String> messages = decryptor.decryptMessages();
            for (String message : messages) System.out.println(message);

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }
}