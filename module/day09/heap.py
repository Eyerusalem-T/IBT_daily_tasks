import heapq

priority_queue = []
heapq.heappush(priority_queue, (3, "fooooood"))
heapq.heappush(priority_queue, (2, "fooooooooooooooooood"))
heapq.heappush(priority_queue, (1, "fooooooooooooooooooooood"))


highest_priority = heapq.heappop(priority_queue)
priority_value = highest_priority[0]
transaction = highest_priority[1]

print(f"Served First ): {transaction} (Priority Value: {priority_value})")