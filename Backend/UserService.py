def save(mysql, user):
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO MyUsers(firstname, lastname, username, password) VALUES (%s, %s, %s, %s)",\
    (user.firstname, user.lastname, user.username, user.password))
    mysql.connection.commit()
    cursor.close()
    return 'ok'
