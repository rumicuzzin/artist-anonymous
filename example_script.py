#!/usr/bin/env python3
"""
Simple MongoDB script example
Add and retrieve data from MongoDB
"""

from pymongo import MongoClient
from datetime import datetime

# Connect to MongoDB (running locally in the container)
client = MongoClient('mongodb://localhost:27017/')

# Create/access database and collection
db = client['artplace_db']
collection = db['items']

def add_item(name, description, price=None):
    """Add an item to the database"""
    item = {
        'name': name,
        'description': description,
        'price': price,
        'created_at': datetime.now()
    }
    
    result = collection.insert_one(item)
    print(f"✅ Added item with ID: {result.inserted_id}")
    return result.inserted_id

def get_all_items():
    """Retrieve all items from the database"""
    items = list(collection.find())
    print(f"📋 Found {len(items)} items:")
    
    for item in items:
        print(f"  - {item['name']}: {item['description']}")
        if item.get('price'):
            print(f"    Price: ${item['price']}")
        print(f"    Created: {item['created_at']}")
        print()
    
    return items

def find_item_by_name(name):
    """Find a specific item by name"""
    item = collection.find_one({'name': name})
    if item:
        print(f"🔍 Found: {item['name']} - {item['description']}")
        return item
    else:
        print(f"❌ No item found with name: {name}")
        return None

if __name__ == "__main__":
    print("🚀 MongoDB Script Example")
    print("=" * 30)
    
    # Add some sample data
    add_item("Painting", "Beautiful landscape painting", 150.00)
    add_item("Sculpture", "Modern abstract sculpture", 300.00)
    add_item("Sketch", "Quick pencil sketch")
    
    print("\n" + "=" * 30)
    
    # Retrieve all items
    get_all_items()
    
    print("=" * 30)
    
    # Find specific item
    find_item_by_name("Painting")
    
    print("\n🎯 Script completed!")
