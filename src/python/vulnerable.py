query = 'SELECT * FROM myapp_person WHERE last_name = %s' % lname
Person.objects.raw(query)