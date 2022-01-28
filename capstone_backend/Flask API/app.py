from flask import Flask, make_response, request 
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


class Config():
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI")
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get("SQLALCHEMY_TRACK_MODIFICATIONS")

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
mirgate = Migrate(app, db)

######################### API Bones #########################

#Room Bones#
class Room(db.Model):
    room_id = db.Column(db.Integer, primary_key=True)
    room_name = db.Column(db.String, index=True)
    difficulty = db.Column(db.String)
    ##remodel_id = db.Column(db.ForeignKey('remodel_item.remodel_id'))##
    remodel = db.relationship("Remodel_item", backref="remodol_id", lazy="dynamic", cascade='all, delete-orphan')

    def __repr__(self):
        return f'<{self.room_id}|{self.room_name}>'


    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


    def from_dict(self, data):
        self.room_name = data['room_name']
        self.difficulty = data['difficulty']
        

    def to_dict(self):
        return {"room_id": self.room_id, "room_name": self.room_name}


#Remodel Bones#
class Remodel_item(db.Model):
    remodel_id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String, index=True)
    room_id = db.Column(db.ForeignKey('room.room_id'))
    tool_id = db.Column(db.ForeignKey('tool.tool_id'))
    instruction_id = db.Column(db.ForeignKey('instruction.instruction_id'))
    

    def __repr__(self):
        return f'<{self.remodel_id}|{self.item_name}>'


    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


    def from_dict(self, data):
        self.item_name = data['item_name']
        self.tool_id = data['tool_id']
        self.instruction_id = data['instruction_id']
        
        

    def to_dict(self):
        return {"remodel_id": self.remodel_id, "item_name": self.item_name, "tool_id": self.tool_id, "instruction_id": self.instruction_id}


#Tool Bones#
class Tool(db.Model):
    tool_id = db.Column(db.Integer, primary_key=True)
    tool_name = db.Column(db.String, index=True)
    avg_price = db.Column(db.Integer)
    description = db.Column(db.Text)
    tool_image = db.Column(db.String)
    tool_instruction_id = db.Column(db.ForeignKey('tool_instruction.tool_instruction_id'))

    def __repr__(self):
        return f'<{self.tool_id}|{self.tool_name}>'


    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


    def from_dict(self, data):
        self.tool_name = data['tool_name']
        self.avg_price = data['avg_price']
        self.description = data['description']
        self.tool_image = data['tool_image']
        self.tool_instruction_id = data['tool_instruction_id']
        

    def to_dict(self):
        return {"tool_id": self.tool_id, "tool_name": self.tool_name, "avg_price": self.avg_price, "description": self.description, "tool_image": self.tool_image, "tool_instruction_id": self.tool_instruction_id}

#instructions Bones#
class Instruction(db.Model):
    instruction_id = db.Column(db.Integer, primary_key=True)
    instruction_name = db.Column(db.String, index=True)
    instruction_link = db.Column(db.String)

    def __repr__(self):
        return f'<{self.instruction_id}|{self.instruction_name}>'


    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


    def from_dict(self, data):
        self.instruction_name = data['instruction_name']
        self.instruction_link = data['instruction_link']

        

    def to_dict(self):
        return {"instruction_id": self.instruction_id, "instruction_name": self.instruction_name, "instruction_link": self.instruction_link}


#Tool Instructions Bones#
class Tool_instruction(db.Model):
    tool_instruction_id = db.Column(db.Integer, primary_key=True)
    tool_instruction_name = db.Column(db.String, index=True)
    tool_instruction_link = db.Column(db.String)

    def __repr__(self):
        return f'<{self.remodel_id}|{self.item_name}>'


    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


    def from_dict(self, data):
        self.tool_instruction_name = data['tool_instruction_name']
        self.tool_instruction_link = data['tool_instruction_link']
 
        

    def to_dict(self):
        return {"tool_instruction_id": self.tool_instruction_id, "tool_instruction_name": self.tool_instruction_name, "tool_instruction_link": self.tool_instruction_link}


###################### CRUD OPPERATION ######################

#Room Class CRUD#
@app.get('/room')
def get_rooms():
    return make_response({"rooms":[room.to_dict() for room in Room.query.all()]}, 200)

@app.get('/room/<int:room_id>')
def get_room(room_id):
    return make_response(Room.query.get(room_id).to_dict(), 200)

@app.post('/room')
def post_room():
    data = request.get_json()
    new_room = Room()
    new_room.from_dict(data)
    new_room.save()
    return make_response("success", 200)

@app.put('/room/<int:room_id>')
def put_room(room_id):
    data = request.get_json()
    room = Room.query.get(room_id)
    room.from_dict(data)
    room.save()
    return make_response("success", 200)

@app.delete('/room/<int:room_id>')
def delete_room(room_id):
   Room.query.get(room_id).delete()
   return make_response("success", 200)


#Remodel_item Class CRUD#
@app.get('/remodel_item')
def get_remodel_items():
    return make_response({"remodel_items":[remodel_item.to_dict() for remodel_item in Remodel_item.query.all()]}, 200)

@app.get('/remodel_item/<int:remodel_id>')
def get_remodel_item(remodel_id):
    return make_response(Remodel_item.query.get(remodel_id).to_dict(), 200)

@app.post('/remodel_item')
def post_remodel_item():
    data = request.get_json()
    new_remodel_item = Remodel_item()
    new_remodel_item.from_dict(data)
    new_remodel_item.save()
    return make_response("success", 200)

@app.put('/remodel_item/<int:remodel_id>')
def put_remodel_item(remodel_id):
    data = request.get_json()
    remodel_item = Remodel_item.query.get(remodel_id)
    remodel_item.from_dict(data)
    remodel_item.save()
    return make_response("success", 200)

@app.delete('/remodel_item/<int:remodel_id>')
def delete_remodel_item(remodel_id):
   Remodel_item.query.get(remodel_id).delete()
   return make_response("success", 200)

#Tool Class CRUD#
@app.get('/tool')
def get_tools():
    return make_response({"tools":[tool.to_dict() for tool in Tool.query.all()]}, 200)

@app.get('/tool/<int:tool_id>')
def get_tool(tool_id):
    return make_response(Tool.query.get(tool_id).to_dict(), 200)

@app.post('/tool')
def post_tool():
    data = request.get_json()
    new_tool = Tool()
    new_tool.from_dict(data)
    new_tool.save()
    return make_response("success", 200)

@app.put('/tool/<int:tool_id>')
def put_tool(tool_id):
    data = request.get_json()
    tool = Tool.query.get(tool_id)
    tool.from_dict(data)
    tool.save()
    return make_response("success", 200)

@app.delete('/tool/<int:tool_id>')
def delete_tool(tool_id):
   Tool.query.get(tool_id).delete()
   return make_response("success", 200)

#Instructions Class CRUD#
@app.get('/instruction')
def get_instructions():
    return make_response({"instructions":[instruction.to_dict() for instruction in Instruction.query.all()]}, 200)

@app.get('/instruction/<int:instruction_id>')
def get_instruction(instruction_id):
    return make_response(Instruction.query.get(instruction_id).to_dict(), 200)

@app.post('/instruction')
def post_instruction():
    data = request.get_json()
    new_instruction = Instruction()
    new_instruction.from_dict(data)
    new_instruction.save()
    return make_response("success", 200)

@app.put('/instruction/<int:instruction_id>')
def put_instruction(instruction_id):
    data = request.get_json()
    instruction = Instruction.query.get(instruction_id)
    instruction.from_dict(data)
    instruction.save()
    return make_response("success", 200)

@app.delete('/instruction/<int:instruction_id>')
def delete_instruction(instruction_id):
   Instruction.query.get(instruction_id).delete()
   return make_response("success", 200)

#Tool Instruction Class CRUD#
@app.get('/tool_instruction')
def get_tool_instructions():
    return make_response({"tool_instructions":[tool_instruction.to_dict() for tool_instruction in Tool_instruction.query.all()]}, 200)

@app.get('/tool_instruction/<int:tool_instruction_id>')
def get_tool_instruction(tool_instruction_id):
    return make_response(Tool_instruction.query.get(tool_instruction_id).to_dict(), 200)

@app.post('/tool_instruction')
def post_tool_instruction():
    data = request.get_json()
    new_tool_instruction = Tool_instruction()
    new_tool_instruction.from_dict(data)
    new_tool_instruction.save()
    return make_response("success", 200)

@app.put('/tool_instruction/<int:tool_instruction_id>')
def put_tool_instruction(tool_instruction_id):
    data = request.get_json()
    tool_instruction = Tool_instruction.query.get(tool_instruction_id)
    tool_instruction.from_dict(data)
    tool_instruction.save()
    return make_response("success", 200)

@app.delete('/tool_instruction/<int:tool_instruction_id>')
def delete_tool_instruction(tool_instruction_id):
   Tool_instruction.query.get(tool_instruction_id).delete()
   return make_response("success", 200)