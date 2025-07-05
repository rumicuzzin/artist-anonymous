from bson import ObjectId
# In this file we define the class for an artwork object 
class artwork:
    def __init__(self, title, model, description, price, image_url, units_sold=0, colours=None, id=None):
        self.title = title
        self.model = model
        self.description = description
        self.price = price
        self.image_url = image_url
        self.units_sold = units_sold
        self.colours = colours if colours is not None else []
        self.id = id if id is not None else ObjectId()  # Use ObjectId for MongoDB compatibility


