import java.util.*;

public class LoopMaster {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());  // Number of lines in the command set
        List<String> commands = new ArrayList<>();

        // Read all commands
        for (int i = 0; i < n; i++) {
            commands.add(sc.nextLine().trim());
        }

        StringBuilder output = new StringBuilder();
        Stack<LoopState> loopStack = new Stack<>();
        int currentLine = 0;

        while (currentLine < n) {
            String command = commands.get(currentLine);

            if (command.startsWith("for")) {
                int times = Integer.parseInt(command.split(" ")[1]);
                loopStack.push(new LoopState(times, currentLine));
                currentLine++;  // Move to the next command (expecting "do")
            } else if (command.equals("do")) {
                loopStack.peek().startLine = currentLine;  // Update the loop start line
                currentLine++;  // Enter the loop body
            } else if (command.equals("done")) {
                LoopState currentLoop = loopStack.peek();
                if (currentLoop.currentIteration < currentLoop.totalIterations) {
                    currentLoop.currentIteration++;
                    currentLine = currentLoop.startLine + 1;  // Repeat loop body
                } else {
                    loopStack.pop();  // Exit loop
                    currentLine++;
                }
            } else if (command.startsWith("break")) {
                int breakAt = Integer.parseInt(command.split(" ")[1]);
                LoopState currentLoop = loopStack.peek();
                if (currentLoop.currentIteration == breakAt) {
                    currentLine = findMatchingDone(commands, currentLine);
                    loopStack.pop();  // Break the loop
                } else {
                    currentLine++;
                }
            } else if (command.startsWith("continue")) {
                int continueAt = Integer.parseInt(command.split(" ")[1]);
                LoopState currentLoop = loopStack.peek();
                if (currentLoop.currentIteration == continueAt) {
                    currentLoop.currentIteration++;
                    currentLine = currentLoop.startLine + 1;  // Move to the next iteration
                } else {
                    currentLine++;
                }
            } else if (command.startsWith("print")) {
                if (!loopStack.isEmpty() && loopStack.peek().currentIteration <= loopStack.peek().totalIterations) {
                    output.append(command.substring(7, command.length() - 1)).append("\n");
                }
                currentLine++;
            }
        }

        // Print the accumulated output in one go
        System.out.print(output);
    }

    // Helper method to find the matching "done" for a loop
    private static int findMatchingDone(List<String> commands, int currentLine) {
        int nesting = 0;
        for (int i = currentLine; i < commands.size(); i++) {
            if (commands.get(i).equals("do")) nesting++;
            if (commands.get(i).equals("done")) {
                if (nesting == 0) return i + 1;
                nesting--;
            }
        }
        return commands.size();  // End of commands
    }

    // Class to manage loop state
    static class LoopState {
        int totalIterations;
        int currentIteration;
        int startLine;

        LoopState(int totalIterations, int startLine) {
            this.totalIterations = totalIterations;
            this.currentIteration = 1;
            this.startLine = startLine;
        }
    }
}
