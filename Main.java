import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== Student Grading System ===");

        // 1. መረጃ መቀበል
        System.out.print("የተማሪ ስም ያስገቡ: ");
        String name = scanner.nextLine();

        System.out.print("ውጤት (ከ 100): ");
        double mark = scanner.nextDouble();

        // 2. ውጤቱን ማስላት (Logic)
        String grade;
        if (mark >= 90) {
            grade = "A+";
        } else if (mark >= 85) {
            grade = "A";
        } else if (mark >= 75) {
            grade = "B";
        } else if (mark >= 60) {
            grade = "C";
        } else {
            grade = "F";
        }

        // 3. ውጤቱን ማሳየት
        System.out.println("\n--- የተማሪው መረጃ ---");
        System.out.println("ስም: " + name);
        System.out.println("ውጤት: " + mark);
        System.out.println("ደረጃ (Grade): " + grade);

        scanner.close();
    }
}