public class Exceptions {
  class TryException extends Exception {
  }

  void tryMe() throws TryException {
    if (Math.random() > 0.5) {
      return;
    }
    if (Math.random() > 0.25) {
      throw new TryException();
    }
    throw new RuntimeException();
  }

  void nestedTry() throws TryException{
    tryMe();
  }

  public static void main(String[] args) {
    Exceptions instance = new Exceptions();

    int attempts = 1000;
    int successes = 0;
    int failures = 0;
    int errors = 0;

    for(int i=0; i<attempts; i++) {
      try{
        instance.tryMe();
        successes++;
      } catch(TryException ex) {
        failures++;

      } catch(RuntimeException ex) {
        errors++;
      }
    }

    for(int i=0; i<attempts; i++) {
      try{
        instance.nestedTry();
        successes++;
      } catch (TryException ex) {
        failures++;
      } catch (RuntimeException ex) {
        errors++;
      }
    }

    String report = "Attempts: %s; Success; %s; Failures: %s; Errors: %s%n";
    System.out.format(report, 2*attempts,successes,failures,errors);
  }
}
