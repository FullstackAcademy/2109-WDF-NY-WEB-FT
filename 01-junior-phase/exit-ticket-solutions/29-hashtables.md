# Day 29: Hash Tables, Dynamic Programming

**You should be able to:**
- Explain what a hash table is
- Explain what makes hash tables so powerful
- Define what dynamic programming is
- Define the methods around dynamic programming (memoization/top-down and bottom-up)


## What is open addressing?

- Open addressing is one way to deal with hash table collisions. If a bucket is full, find the next empty bucket and place the value in that spot instead of the first place it was hashed to.


## What is separate chaining?

- Separate chaining is one way to deal with hash table collisions. Every bucket stores a secondary data structure, like a linked list. When collisions happen, it will create a new entry in that data structure.


## What is the time complexity of insert in a hash table (i.e. adding a new key-value pair)?

- O(n) - linear
- O(log(n)) - logarithmic
- **O(1) - constant** ☑️
  - The idea here is that it will take they key, hash it to come up with a memory address and store the value there.
- O(n * log(n)) - loglinear


## What is the time complexity of retrieval in a hash table (i.e. fetching the value given a key)?

- O(n) - linear
- O(log(n)) - logarithmic
- **O(1) - constant** ☑️
  - The point of a hash table is that we avoid the pitfalls of a linear data structure like an array where we have to linearly search the array to retrieve a value if we don't know the index of which that value exists.
- O(n * log(n)) - loglinear


## What is the time complexity of searching for a KEY in a hash table (i.e. find if a certain key exists in the hash table)?

- O(n) - linear
- O(log(n)) - logarithmic
- **O(1) - constant** ☑️
  - Hash table is hashed so while searching for a key might not be the first thought of to search for in a hash table, we can just directly check if a key exists. If we are searching for the key `potato`, then we search for it as `hashTable.potato`
- O(n * log(n)) - loglinear


## What is the time complexity of searching for a VALUE in a hash table (i.e. find if a certain value exists in the hash table)?

- O(n) - linear
- O(log(n)) - logarithmic
- **O(1) - constant** ☑️
  - Given the key, it gets sent through the hash function to retrieve a value. Remember, a hash table is a set of key-value pairs so values will be accesed by a key. If the value doesn't exist, it will return nothing.
- O(n * log(n)) - loglinear
