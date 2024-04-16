from flask import Flask, jsonify, request, render_template
import psycopg2
import psycopg2.extras
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Establish a connection to the PostgreSQL database
conn = psycopg2.connect(
    host="localhost", port=5432, database="postgres", user="postgres", password="root"
)


@app.route("/messages", methods=["GET"])
def get_messages():
    try:
        # Create a cursor to perform database operations
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

        # Execute the SELECT query
        cur.execute("SELECT * FROM messages")

        # Fetch all rows from the result set
        rows = cur.fetchall()

        # Close the cursor
        cur.close()

        # Return the rows as a JSON response
        return jsonify(rows)

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error retrieving data from PostgreSQL:", error)

    return jsonify([])


@app.route("/messages", methods=["POST"])
def create_message():
    try:
        # Get the JSON data from the request body
        data = request.get_json()
        print("DATA", data)

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the INSERT query
        cur.execute(
            "INSERT INTO messages (title, message, time) VALUES (%s, %s, %s)",
            (data["title"], data["message"], data["time"]),
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({"message": "Message added successfully"})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error adding message to PostgreSQL:", error)

    # Return an error response
    return jsonify({"message": "Failed to add message"})


@app.route("/messages/<int:id>", methods=["PUT"])
def update_message(id):
    try:
        # Get the JSON data from the request body
        data = request.get_json()

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the UPDATE query
        cur.execute(
            "UPDATE messages SET (sender, title, time) = (%s, %s, %s) WHERE id = %s",
            (data["sender"], data["title"], data["time"], id),
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({"message": "Message updated successfully"})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error updating message in PostgreSQL:", error)

    # Return an error response
    return jsonify({"message": "Failed to update message"})

@app.route('/messages/<int:id>', methods=['DELETE'])
def delete_message(id):
    try:
        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the UPDATE query
        cur.execute(
            "DELETE FROM messages WHERE id = %s",
            (id,)
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({'message': 'message deleted successfully'})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error deleting message in PostgreSQL:", error)

    # Return an error response
    return jsonify({'message': 'Failed to update task'})


@app.route("/tasks", methods=["GET"])
def get_tasks():
    try:
        # Create a cursor to perform database operations
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

        # Execute the SELECT query
        cur.execute("SELECT * FROM tasks")

        # Fetch all rows from the result set
        rows = cur.fetchall()

        # Close the cursor
        cur.close()

        # Return the rows as a JSON response
        return jsonify(rows)

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error retrieving data from PostgreSQL:", error)

    return jsonify([])


@app.route("/task/<int:task_id>", methods=["GET"])
def get_task(task_id):
    try:
        # Create a cursor to perform database operations
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

        # Execute the SELECT query
        cur.execute("SELECT * FROM tasks WHERE task_id = %s", (task_id,))

        # Fetch all rows from the result set
        rows = cur.fetchall()

        # Close the cursor
        cur.close()

        # Return the rows as a JSON response
        return jsonify(rows)

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error retrieving data from PostgreSQL:", error)

    return jsonify([])


@app.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    try:
        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the UPDATE query
        cur.execute(
            "DELETE FROM tasks WHERE task_id = %s",
            (id,)
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({'message': 'task deleted successfully'})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error updating task in PostgreSQL:", error)

    # Return an error response
    return jsonify({'message': 'Failed to update task'})


@app.route("/tasks", methods=["POST"])
def add_task():
    try:
        # Get the JSON data from the request body
        data = request.get_json()
        print("DATA", data)

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the INSERT query
        cur.execute(
            "INSERT INTO tasks (description, assignee, link, due) VALUES (%s, %s, %s, %s)",
            (data["description"], data["assignee"], data["link"], data["due"]),
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({"Task": "Task added successfully"})
    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error adding Task to PostgreSQL:", error)


@app.route("/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    try:
        # Get the JSON data from the request body
        data = request.get_json()

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the UPDATE query
        cur.execute(
            "UPDATE tasks SET (description, assignee, link, due) = (%s, %s, %s, %s) WHERE task_id = %s",
            (data["description"], data["assignee"], data["link"], data["due"], task_id),
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({"Task": "Task updated successfully"})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error updating task in PostgreSQL:", error)

    # Return an error response
    return jsonify({"task": "Failed to update Task"})


@app.route("/tasks", methods=["POST"])
def post_task():
    try:
        # Get the JSON data from the request body
        data = request.get_json()
        print("DATA", data)

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the INSERT query
        cur.execute(
            "INSERT INTO tasks (description, assignee, link, due) VALUES (%s, %s, %s, %s)",
            (data["description"], data["assignee"], data["link"], data["due"]),
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({"Task": "Task added successfully"})
    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error adding Task to PostgreSQL:", error)

@app.route("/users", methods=["GET"])
def get_users():
    try:
        # Create a cursor to perform database operations
        cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)

        # Execute the SELECT query
        cur.execute("SELECT * FROM users")

        # Fetch all rows from the result set
        rows = cur.fetchall()

        # Close the cursor
        cur.close()

        # Return the rows as a JSON response
        return jsonify(rows)

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error retrieving data from PostgreSQL:", error)

    return jsonify([])



@app.route("/users", methods=["POST"])
def add_user():
    try:
        # Get the JSON data from the request body
        data = request.get_json()
        print("DATA", data)

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the INSERT query
        cur.execute(
            "INSERT INTO users (username, hashed_password, height, weight, role) VALUES (%s, %s, %s, %s, %s)",
            (
                data["username"],
                data["hashed_password"],
                data["height"],
                data["weight"],
                data["role"],
            ),
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({"User": "User added successfully"})
    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error updating User to PostgreSQL:", error)


@app.route("/users/<int:id>", methods=["PUT"])
def update_user(id):
    try:
        # Get the JSON data from the request body
        data = request.get_json()

        # Create a cursor to perform database operations
        cur = conn.cursor()

        # Execute the UPDATE query
        cur.execute(
            "UPDATE tasks SET (username, hashed_password, height, weight, role) = (%s, %s, %s, %s, %s) WHERE id = %s",
            (
                data["username"],
                data["hashed_password"],
                data["height"],
                data["weight"],
                data["role"],
                id,
            ),
        )

        # Commit the transaction
        conn.commit()

        # Close the cursor
        cur.close()

        # Return a success response
        return jsonify({"User": "User updated successfully"})

    except (psycopg2.Error, psycopg2.DatabaseError) as error:
        print("Error updating User in PostgreSQL:", error)

    # Return an error response
    return jsonify({"Users": "Failed to update User"})



if __name__ == "__main__":
    app.run()
    conn.close()