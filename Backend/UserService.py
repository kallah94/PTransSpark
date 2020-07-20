def save(mysql, user):
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO Users(firstname, lastname, username, password) VALUES (%s, %s, %s, %s)",\
    (user.firstname, user.lastname, user.username, user.password))
    mysql.connection.commit()
    cursor.close()
    return 'ok'

def getUser(mysql, username):
    cursor = mysql.connection.cursor()
    query_string = "SELECT * FROM Users WHERE username = %s"
    cursor.execute(query_string, (username,))
    user = cursor.fetchall()
    cursor.close()
    return user



