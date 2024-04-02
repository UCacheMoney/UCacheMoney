from email.message import EmailMessage
import smtplib, ssl
from transaction import Transaction

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
        self.transactions=[]
    

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
        self.sendEmail(self.email, "Reaching Spending Limit", 
        f"You are withen 100$ of your monthly budget. 
        Be careful with your next purchases")

    def reachingLimitOnCategory(self, category):
        self.sendEmail(self.email, "Reaching Spending Limit", 
        f"You are withen 100$ of your monthly budget on {category}. 
        Be careful with your next purchases")

    def hitLimit(self):
        self.sendEmail(self.email, "Reached Spending Limit", 
        f"You hit your overall monthly budget.")

    def hitLimitCategory(self, category):
        self.sendEmail(self.email, "Reached Spending Limit", 
        f"You hit your overall monthly budget for {category}.")

    

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
    
    def addTransaction(self, value, category):
        trans=Transaction(value, category)
        if category not in self.categoriesAndLimits:
            return False
        else:
            #database work to calculate if amount is over limit after transaction
            return True
        
    def sendEmail(recipient, subject, message):
        email = EmailMessage()
        email['From'] = 'ucashemoney@gmail.com'
        email['To'] = recipient
        email['Subject'] = subject

        email.set_content(message)

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login('ucashemoney@gmail.com', 'awyn srnh gpan vfkp')
            smtp.send_message(email)


    


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
        self.sendEmail(self.email, "Reaching Spending Limit", 
        f"You are within 100$ of your monthly budget. 
        Be careful with your next purchases")

        self.sendEmail((self.parent).getEmail(), "Child Is Reaching Spending Limit", 
        f"Your child is within 100$ of their monthly budget. ")


    def reachingLimitOnCategory(self, category):
        self.sendEmail(self.email, "Reaching Spending Limit", 
        f"You are within 100$ of your monthly budget on {category}. 
        Be careful with your next purchases")

        self.sendEmail((self.parent).getEmail(), "Reaching Spending Limit", 
        f"Your child is within 100$ of their monthly budget on {category}. ")


    def hitLimit(self):
        self.sendEmail(self.email, "Reached Spending Limit", 
        f"You hit your overall monthly budget.")

        self.sendEmail((self.parent).getEmail(), "Reached Spending Limit", 
        f"Your child hit their overall monthly budget.")

    def hitLimitCategory(self, category):
        self.sendEmail(self.email, "Reached Spending Limit", 
        f"You hit your overall monthly budget for {category}.")

        self.sendEmail((self.parent).getEmail(), "Reached Spending Limit", 
        f"Your child hit your overall monthly budget for {category}.")

    
    

