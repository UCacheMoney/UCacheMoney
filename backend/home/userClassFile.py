import backend.home.functions as functions

class UserBase():

    #constructors
    def __init__(self):
        self.username = None
        self.password = None
        self.ID = None
        self.name = None
        self.accountNumber = None
        self.email = None
        self.categoriesAndLimits = {}
    

    #setters
    def setID(self, id):
        self.ID = id
    
    def setName(self, name):
        self.name = name

    def setAccoutNumber(self, num):
        self.accountNumber = num
    
    def setEmail(self, email):
        self.email = email
    
    def newCategory(self, category):
        self.categoriesAndLimits[category] = None
    
    def newCategory(self, category, limit):
        self.categoriesAndLimits[category] = limit


    def reachingLimit(self):
        functions.sendEmail(self.email, "Reaching Spending Limit", 
        f"""You are withen 100$ of your monthly budget. 
        Be careful with your next purchases""")

    def reachingLimitOnCategory(self, category):
        functions.sendEmail(self.email, "Reaching Spending Limit", 
        f"""You are withen 100$ of your monthly budget on {category}. 
        Be careful with your next purchases""")

    def hitLimit(self):
        functions.sendEmail(self.email, "Reached Spending Limit", 
        f"""You hit your overall monthly budget.""")

    def hitLimitCategory(self, category):
        functions.sendEmail(self.email, "Reached Spending Limit", 
        f"""You hit your overall monthly budget for {category}.""")

    

    #getters
    def getID(self):
        return self.ID
    
    def getName(self):
        return self.name
    
    def getAccountNumber(self):
        return self.accountNumber
    
    def getEmail(self):
        return self.email
    
    def getCategory(self):
        return self.categoriesAndLimits
    


class Parent(UserBase):
    def __init__(self):
        super.__init__()
        self.children = []

    def addChild(self, name, email):
        c=Child(name, email, self.ID)
        self.children.append(c)

    



class Child(UserBase):
    def __init__(self, name, email, parentID):
        super().__init__()
        self.name=name
        self.email=email
        self.parent = Parent() #gets parent object from parent ID once database is working
    
    def reachingLimit(self):
        functions.sendEmail(self.email, "Reaching Spending Limit", 
        f"""You are withen 100$ of your monthly budget. 
        Be careful with your next purchases""")

        functions.sendEmail((self.parent).getEmail(), "Child Is Reaching Spending Limit", 
        f"""Your child is withen 100$ of their monthly budget. """)


    def reachingLimitOnCategory(self, category):
        functions.sendEmail(self.email, "Reaching Spending Limit", 
        f"""You are withen 100$ of your monthly budget on {category}. 
        Be careful with your next purchases""")

        functions.sendEmail((self.parent).getEmail(), "Reaching Spending Limit", 
        f"""Your child is withen 100$ of their monthly budget on {category}. """)


    def hitLimit(self):
        functions.sendEmail(self.email, "Reached Spending Limit", 
        f"""You hit your overall monthly budget.""")

        functions.sendEmail((self.parent).getEmail(), "Reached Spending Limit", 
        f"""Your child hit their overall monthly budget.""")

    def hitLimitCategory(self, category):
        functions.sendEmail(self.email, "Reached Spending Limit", 
        f"""You hit your overall monthly budget for {category}.""")

        functions.sendEmail((self.parent).getEmail(), "Reached Spending Limit", 
        f"""Your child hit your overall monthly budget for {category}.""")

    
    

