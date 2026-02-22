import serial

# Replace with your COM port
ser = serial.Serial('COM3', 9600)

print("Listening to Arduino...\n")

while True:
    line = ser.readline().decode().strip()
    print("Raw Data:", line)