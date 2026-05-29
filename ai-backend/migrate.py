import sqlite3

conn = sqlite3.connect('eventflow.db')
try:
    conn.execute('ALTER TABLE participants ADD COLUMN stage TEXT DEFAULT "roster"')
    conn.commit()
    print('Stage column added!')
except Exception as e:
    print(f'Note: {e}')
conn.close()