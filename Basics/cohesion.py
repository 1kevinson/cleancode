class User:
    username = ''
    email = ''

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def salute_user(self):
        print('Hello ' + self.username + ' your email is ' + self.email)


# Maximum Cohesion - Class methods using all their properties
user = User("Kevin", "kk@gm.com")
user.salute_user()
