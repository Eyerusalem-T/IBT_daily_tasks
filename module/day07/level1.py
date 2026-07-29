#order the rank
"""(Instant , Logarithmic , Linear ,Quadratic)
"""
# 3rd question
students = [
    "abe","kebe","asela","mami","dad,","bekelu"
]

first_student = students[0]
students.append("Katie")
students.insert(0, "Zara")

#4th question
student_grades = {
    "Aaa": 85,
    "tt": 92,
    "kk": 78,
    "lala": 90,
    "ena": 88
}

student_grades["yared"] = 95
student_grades["Aa"] = 90

if "tt" in student_grades:
    print("tt is in the dictionary with grade:", student_grades["tt"])