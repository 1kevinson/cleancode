class Position:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, origin, width, height):
        self.origin = origin
        self.width = width
        self.height = height

    def get_dimensions(self):
        return self.width * self.height

    def end_points(self):
        corner_top_right = self.origin.x + self.width
        corner_bottom_left = self.origin.y + self.height
        print('Starting Point (X)): ' + str(self.origin.coordX))
        print('Starting Point (Y)): ' + str(self.origin.coordY))
        print('End Point X-Axis (Corner Top Right): ' + str(corner_top_right))
        print('End Point Y-Axis (Corner Bottom Left): ' + str(corner_bottom_left))


def build_rectangle():
    rectangle_origin = Position(50, 100)
    rectangle = Rectangle(rectangle_origin, 90, 10)

    return rectangle


new_rectangle = build_rectangle()

print(new_rectangle.get_dimensions())
new_rectangle.end_points()
