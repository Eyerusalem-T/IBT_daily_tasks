def calculate(bill, tip_percetage ,number_of_people):
    tip_amount = bill * (tip_percetage / 100)
    total_bill = bill + tip_amount
    amount_per_person = total_bill / number_of_people
    return amount_per_person

def main():
    try:
        bill = int(input("Enter the total bill amount: "))
        tip_percentage =float(input("Enter the tip percent: "))
        number_of_people = int(input("Enter the number of people: "))

        if number_of_people <= 0:
            print("Error: Number of people must be greater than zero.")
            return
        
        amount_per_person = calculate(bill, tip_percentage, number_of_people)
        print(f"Each person should pay: {amount_per_person:.2f}")
    except ValueError:
        print("Invalid input. Please enter numeric values.")

if __name__ == "__main__":
    main()


#2nd question od day 2

def quiz_game():
    questions = [
        {
            "question": "What is the capital of France?",
            "options": ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
            "answer": "C"
        },
        {
            "question": "What is 2 + 2?",
            "options": ["A. 3", "B. 4", "C. 5", "D. 6"],
            "answer": "B"
        },
        {
            "question": "What is the largest ocean on Earth?",
            "options": ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
            "answer": "D"
        }
    ]

    score = 0
    for q in questions:
        print(q["question"])
        for option in q["options"]:
            print(option)
        answer = input("Enter your answer (A, B, C, or D): ").upper()
        if answer == q["answer"]:
            print("Correct!")
            score += 1
        else:
            print(f"Wrong! The correct answer is {q['answer']}.")
    
    print(f"You scored {score} out of {len(questions)}.")
    return score

if __name__ == "__main__":
    quiz_game()

#3rd question of day 2
def calculate_final_price(price, tax_rate = 0.15, discount=0):
    tax = price * tax_rate
    final_price = price + tax - discount
    return final_price

if __name__ == "__main__":
    print(f"Final price: {calculate_final_price(100)}")