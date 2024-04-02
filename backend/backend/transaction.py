class Transaction:

    def __init__(self, value, category):
        self.value=value
        self.category=category
    
    def getValue(self):
        return self.value
    
    def getCategory(self):
        return self.category
    
    def setValue(self, newVal):
        self.value=newVal

    def setCategory(self, newCat):
        self.category=newCat