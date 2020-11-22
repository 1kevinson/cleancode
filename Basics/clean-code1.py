class ValidatableNumber:
    def __init__(self, number):
        self.number = number

    def is_bigger_than(self, other_number):
        return other_number < self.number

    def is_lower_than(self, other_number):
        return other_number > self.number


input_number = ValidatableNumber(31)

print(input_number.is_bigger_than(15))
print(input_number.is_lower_than(32))
