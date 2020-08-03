import json
from json import JSONEncoder

class UserSession:
    def __init__(self,  kind=None, proxyUser=None,
                driverMemory=None,
                driverCores=None,
                name=None,
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
        name=None,
        file=None,
        executorMemory=None,
        driverMemory=None,
        driverCores=None,
        numExecutors = None,
        args=None,
        ):
        self.name = name
        self.file = file
        self.executorMemory = executorMemory
        self.driverMemory = driverMemory
        self.driverCores = driverCores
        self.numExecutors = numExecutors
        self.args = args
        
        

        def __str__(self):
            return  'driverMemory: '+self.driverMemory +\
                'driverCores: '+self.driverCores    +\
                'name: '+self.name

# Subclass JSONEncoder
class BatchEncoder(JSONEncoder):
    def default(self, Batch):
        return Batch.__dict__