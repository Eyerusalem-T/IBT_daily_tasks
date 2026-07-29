class BankGraph:
    def __init__(self):
        self.graph = {}

    def add_customer(self, name):
        if name not in self.graph:
            self.graph[name] = []

    def add_transfer(self, sender, receiver):
        self.add_customer(sender)
        self.add_customer(receiver)
        self.graph[sender].append(receiver)

    def print_graph(self):
        print("--- MONEY TRANSFER GRAPH ---")
        for customer, transfers in self.graph.items():
            if transfers:
                recipients = ", ".join(transfers)
                print(f"{customer} sent money to -> {recipients}")
            else:
                print(f"{customer} sent money to -> None")


bank = BankGraph()
for name in ["eyerus", "kiki", "lidu", "feven"]:
    bank.add_customer(name)
bank.add_transfer("eyerus", "kiki")
bank.add_transfer("feven", "eyerus")
bank.add_transfer("kiki", "lidu")
bank.add_transfer("feven", "lidu")

bank.print_graph()