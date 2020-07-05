import json
from json import JSONEncoder

class UserSession:
    def __init__(self,  kind='pyspark', proxyUser=None,
                driverMemory=None,
                driverCores=2,
                name='kallah',
                ):
        self.kind = kind
        self.proxyUser = proxyUser
        self.driverMemory = driverMemory
        self.driverCores = driverCores
        self.name = name

        def __str__(self):
            return  'kind: '+self.kind +\
                'proxyUser: '+self.proxyUser +\
                'driverMemory: '+self.driverMemory +\
                'driverCores: '+self.driverCores +\
                'name: '+self.name

# Subclass JSONEncoder
class UserSessionEncoder(JSONEncoder):
    def default(self, UserSession):
        return UserSession.__dict__

class Batch:
    def __init__(self,
        name='Spark',
        file=None,
        className=None,
        proxyUser=None,
        executorMemory=None,
        driverMemory=None,
        driverCores=None,
        args=None,
        ):
        self.name = name
        self.file = file
        self.className = className
        self.proxyUser = proxyUser
        self.executorMemory = executorMemory
        self.driverMemory = driverMemory
        self.driverCores = driverCores
        self.args = args
        
        

        def __str__(self):
            return  'proxyUser: '+self.proxyUser +\
                'driverMemory: '+self.driverMemory +\
                'driverCores: '+self.driverCores    +\
                'name: '+self.name

# Subclass JSONEncoder
class BatchEncoder(JSONEncoder):
    def default(self, Batch):
        return Batch.__dict__