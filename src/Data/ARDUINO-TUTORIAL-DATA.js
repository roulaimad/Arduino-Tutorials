const arduinoTutorialsData = [
  {
    id: 1,
    title: "Blinking the builtin LED",
    image: "https://i.ytimg.com/vi/PcusGFga46U/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=PcusGFga46U",
    description:
      "Discover how to make the built‑in LED blink using the Arduino’s digital output...",
    tutorialGoals: [
      "Blinking the onboard LED",
      "Working with the Arduino IDE",
      "Knowing how to upload a sketch to your Arduino",
    ],
    componentsNeeded: ["1× Arduino", "1× USB cable", "1× Computer"],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-NL/master/E02-led-knipperen-breadboard/led-knipperen-breadboard.png",
    arduinoCode: `
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`,
  },
  {
    id: 2,
    title: "Blinking LED on breadboard",
    image: "https://i.ytimg.com/vi/Smfzx4WBb9o/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=Smfzx4WBb9o",
    description: "Build a basic circuit… blink an external LED...",
    tutorialGoals: [
      "Wiring an LED to the breadboard",
      "Using digitalWrite",
      "Controlling delays",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× LED",
      "1× 220Ω resistor",
      "2× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-NL/master/E02-led-knipperen-breadboard/led-knipperen-breadboard.png",
    arduinoCode: `
const int ledPin = 8;
void setup() { pinMode(ledPin, OUTPUT); }
void loop() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}`,
  },
  {
    id: 3,
    title: "Fading LED with PWM",
    image: "https://i.ytimg.com/vi/1fhRf-0RxyQ/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=1fhRf-0RxyQ",
    description: "Learn PWM by creating a fade effect on an LED...",
    tutorialGoals: [
      "Understanding analogWrite and PWM",
      "Fade-in/out",
      "Brightness control",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× LED",
      "1× 220Ω resistor",
      "2× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-NL/master/E02-led-knipperen-breadboard/led-knipperen-breadboard.png",
    arduinoCode: `
const int ledPin = 9;
void setup() { pinMode(ledPin, OUTPUT); }
void loop() {
  for (int b = 0; b <= 255; b++){ analogWrite(ledPin,b); delay(10); }
  for (int b = 255; b >= 0; b--){ analogWrite(ledPin,b); delay(10); }
}`,
  },
  {
    id: 4,
    title: "Control blinking speed with potentiometer",
    image: "https://i.ytimg.com/vi/3hGEusmU-vQ/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=3hGEusmU-vQ",
    description: "Use a potentiometer to control LED blink rate...",
    tutorialGoals: ["Analog input", "Mapping values", "Dynamic blink rate"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× LED",
      "1× 220Ω resistor",
      "1× Potentiometer",
      "3× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E04-potmeter/potmeter.png",
    arduinoCode: `
const int pot = A0;
const int led = 9;
void setup() { pinMode(led, OUTPUT); }
void loop() {
  int val = analogRead(pot);
  int speed = map(val, 0, 1023, 100, 1000);
  digitalWrite(led, HIGH);
  delay(speed);
  digitalWrite(led, LOW);
  delay(speed);
}`,
  },
  {
    id: 5,
    title: "Control LED with pushbutton on Arduino",
    image: "https://i.ytimg.com/vi/5aR0cHKc-JA/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=5aR0cHKc-JA",
    description: "Use a pushbutton to toggle an LED...",
    tutorialGoals: ["Digital input", "Button debouncing", "If/else logic"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× LED",
      "1× 220Ω resistor",
      "1× Pushbutton",
      "1× 10 kΩ resistor",
      "4× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E05-switch/switch.png",
    arduinoCode: `
const int btn = 2;
const int led = 8;
void setup() {
  pinMode(btn, INPUT);
  pinMode(led, OUTPUT);
}
void loop() {
  int st = digitalRead(btn);
  digitalWrite(led, st == HIGH ? HIGH : LOW);
}`,
  },
  {
    id: 6,
    title: "Reading 1-wire DS18B20 temperature sensor",
    image: "https://i.ytimg.com/vi/NknCz0vC-RY/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=NknCz0vC-RY",
    description: "Interface with DS18B20 to read temperature...",
    tutorialGoals: ["1‑Wire", "Temperature data", "Library usage"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× DS18B20 sensor",
      "1× 4.7 kΩ resistor",
      "3× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E06-1-wire-temp-sensor-DS18B20/one-wire-temperature.png",
    arduinoCode: `
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_PIN 2

OneWire oneWire(ONE_WIRE_PIN);
DallasTemperature sensors(&oneWire);

void setup(){
  Serial.begin(9600);
  sensors.begin();
}

void loop(){
  sensors.requestTemperatures();
  float tempC = sensors.getTempCByIndex(0);
  Serial.print("Temperature: ");
  Serial.print(tempC);
  Serial.println(" °C");
  delay(1000);
}`,
  },
  {
    id: 7,
    title: "HC-SR04 ultrasonic distance sensor",
    image: "https://i.ytimg.com/vi/nkSUFV7gCNU/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=nkSUFV7gCNU",
    description: "Measure distance with HC‑SR04...",
    tutorialGoals: [
      "Wiring trigger/echo",
      "pulseIn timing",
      "Distance conversion",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× HC‑SR04 sensor",
      "4× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E07-ultrasonic-sensor-HC-SR04/ultrasoon-sensor-HC-SR04.png",
    arduinoCode: `
const int trig = 9;
const int echo = 10;
void setup(){
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}

void loop(){
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  long dur = pulseIn(echo, HIGH);
  float dist = (dur / 2.0) * 0.0343;
  Serial.print("Distance: "); Serial.print(dist); Serial.println(" cm");
  delay(500);
}`,
  },
  {
    id: 8,
    title: "Analog PS2 joystick with push button",
    image: "https://i.ytimg.com/vi/AJLcq93glp0/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=AJLcq93glp0",
    description: "Interface a PS2 joystick with analog X/Y and button...",
    tutorialGoals: ["analogRead X/Y", "button state", "input interpretation"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× PS2 joystick module",
      "5× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E08-analog-ps2-joystick/analog-ps2-joystick.png",

    arduinoCode: `
const int joyX = A0;
const int joyY = A1;
const int joyBtn = 2;

void setup(){
  pinMode(joyBtn, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop(){
  int x = analogRead(joyX);
  int y = analogRead(joyY);
  int btn = digitalRead(joyBtn);
  Serial.print("X: "); Serial.print(x);
  Serial.print(" Y: "); Serial.print(y);
  Serial.print(" Button: "); Serial.println(btn == LOW ? "Pressed" : "Released");
  delay(200);
}`,
  },
  {
    id: 9,
    title: "Infrared receiver with remote",
    image: "https://i.ytimg.com/vi/IYYOoyjQS-8/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=IYYOoyjQS-8",
    description: "Decode IR signals with remote...",
    tutorialGoals: ["Receiving IR", "IRremote lib", "Action on codes"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× IR receiver module",
      "1× IR remote",
      "3× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E09-ir-receiver/ir-receiver.png",

    arduinoCode: `
#include <IRremote.h>

const int recvPin = 11;
IRrecv irrecv(recvPin);
decode_results results;

void setup(){
  Serial.begin(9600);
  irrecv.enableIRIn();
}

void loop(){
  if (irrecv.decode(&results)){
    Serial.print("Code: 0x"); Serial.println(results.value, HEX);
    irrecv.resume();
  }
}`,
  },
  {
    id: 10,
    title: "Sound from a piezo buzzer / speaker",
    image: "https://i.ytimg.com/vi/Ga-QI4166wI/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=Ga-QI4166wI",
    description: "Generate melodies using a piezo buzzer...",
    tutorialGoals: ["tone()/noTone()", "sound control", "simple melodies"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× Piezo buzzer",
      "2× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E10-beeper-buzzer/beeper-buzzer.png",

    arduinoCode: `
const int buzzer = 8;
void setup(){}
void loop(){
  tone(buzzer, 440, 500);
  delay(600);
  tone(buzzer, 660, 500);
  delay(600);
}`,
  },
  {
    id: 11,
    title: "I2C LCD with text and symbols",
    image: "https://i.ytimg.com/vi/SNt3UsMEqc8/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=SNt3UsMEqc8",
    description: "Display text on a 16×2 I2C LCD...",
    tutorialGoals: ["I2C wiring", "LiquidCrystal_I2C", "Scrolling messages"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× I2C LCD (16×2)",
      "4× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E11-I2C-LCD/i2c-lcd.png",
    arduinoCode: `
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27,16,2);

void setup(){
  lcd.init();
  lcd.backlight();
  lcd.print("Hello, World!");
}

void loop(){
  lcd.setCursor(0,1);
  lcd.print(millis()/1000);
  delay(500);
}`,
  },
  {
    id: 12,
    title: "Rotary encoder and interrupts",
    image: "https://i.ytimg.com/vi/gPLpPFmv-Zc/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=gPLpPFmv-Zc",
    description: "Use rotary encoder and interrupts...",
    tutorialGoals: ["Encoder wiring", "Using interrupts", "Detecting rotation"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× Rotary encoder module",
      "3× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E12-rotary-encoder/rotary-encoder.png",
    arduinoCode: `
volatile int position = 0;
const int pinA = 2;
const int pinB = 3;

void doEncoder(){
  position += (digitalRead(pinA) == digitalRead(pinB)) ? +1 : -1;
}

void setup(){
  pinMode(pinA, INPUT_PULLUP);
  pinMode(pinB, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(pinA), doEncoder, CHANGE);
  Serial.begin(9600);
}

void loop(){
  Serial.println(position);
  delay(200);
}`,
  },
  {
    id: 13,
    title: "DHT11 humidity and temperature sensor",
    image: "https://i.ytimg.com/vi/lrDl8NhMwQw/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=lrDl8NhMwQw",
    description: "Read humidity and temperature using DHT11...",
    tutorialGoals: [
      "Interfacing with DHT11",
      "Reading humidity",
      "Serial display",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× DHT11 sensor module",
      "3× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E13-dht11-dht22-temp-humid-sensor/dht11-dht22.png",
    arduinoCode: `
#include <DHT.h>
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup(){
  Serial.begin(9600);
  dht.begin();
}

void loop(){
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  Serial.print("H: "); Serial.print(h);
  Serial.print("%  T: "); Serial.print(t);
  Serial.println("°C");
  delay(2000);
}`,
  },
  {
    id: 14,
    title: "28BYJ-48 stepper motor with ULN2003 driver",
    image: "https://i.ytimg.com/vi/4iRvjBwAzrM/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=4iRvjBwAzrM",
    description: "Control a stepper motor via ULN2003...",
    tutorialGoals: [
      "Stepper control",
      "Library usage",
      "Speed/direction control",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× 28BYJ‑48 stepper motor",
      "1× ULN2003 driver module",
      "Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E14-stepper-motor/stepper-motor.png",
    arduinoCode: `
#include <Stepper.h>
const int stepsPerRev = 2048;
Stepper stepper(stepsPerRev, 8,10,9,11);

void setup(){
  stepper.setSpeed(15);
}

void loop(){
  stepper.step(stepsPerRev);
  delay(500);
  stepper.step(-stepsPerRev);
  delay(500);
}`,
  },
  {
    id: 15,
    title: "Long press button",
    image: "https://i.ytimg.com/vi/TD7vjJy0w8U/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=TD7vjJy0w8U",
    description: "Detect short vs long button presses...",
    tutorialGoals: ["Press duration", "Long-press logic"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Pushbutton",
      "1× 10 kΩ resistor",
      "Breadboard",
      "Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E15-switch-long-press/E15-switch-long-press.png",
    arduinoCode: `
const int btn = 2;
unsigned long pressedTime = 0;
const unsigned long longPress = 2000;

void setup(){
  pinMode(btn, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop(){
  if (digitalRead(btn) == LOW){
    if (pressedTime == 0) pressedTime = millis();
  } else if (pressedTime > 0){
    unsigned long held = millis() - pressedTime;
    Serial.println(held > longPress ? "Long press" : "Short press");
    pressedTime = 0;
  }
}`,
  },
  {
    id: 16,
    title: "PCF8574 I2C I/O expander with LCD",
    image: "https://i.ytimg.com/vi/aACOC9XBBks/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=aACOC9XBBks",
    description: "Drive LCD via PCF8574 I/O expander...",
    tutorialGoals: ["I/O expansion", "I2C comm", "LCD control"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× Breadboard",
      "1× PCF8574 module",
      "1× I2C LCD (16×2)",
      "Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E16-LCD-SPI-ST7920-128x64/LCD-SPI-ST7920-128x64.png",
    arduinoCode: `
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);

void setup(){
  lcd.init();
  lcd.backlight();
  lcd.print("PCF8574 I/O expander");
}

void loop(){}
`,
  },
  {
    id: 17,
    title: "Temperature data logger with SD card",
    image: "https://i.ytimg.com/vi/OXieoH5IsAI/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=OXieoH5IsAI",
    description: "Log temperature readings to an SD card...",
    tutorialGoals: ["SPI communication", "File handling", "Data structuring"],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× SD card module",
      "1× SD card",
      "1× Temperature sensor",
      "Breadboard",
      "Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E17-voltage-sensor/voltage-sensor.png",
    arduinoCode: `
#include <SPI.h>
#include <SD.h>
#include <DHT.h>
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN,DHTTYPE);

const int chipSelect = 10;

void setup(){
  Serial.begin(9600);
  dht.begin();
  if (!SD.begin(chipSelect)) {
    Serial.println("SD failed");
    return;
  }
}

void loop(){
  float t = dht.readTemperature();
  File data = SD.open("log.txt", FILE_WRITE);
  if (data) {
    data.print(millis());
    data.print(",");
    data.println(t);
    data.close();
  }
  delay(5000);
}`,
  },
  {
    id: 18,
    title: "MPU6050 accelerometer and gyroscope sensor",
    image: "https://i.ytimg.com/vi/m67vZaXu0zY/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=m67vZaXu0zY",
    description: "Read acceleration and rotation from MPU6050...",
    tutorialGoals: [
      "I2C interfacing",
      "Accel & gyro data",
      "Data interpretation",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× USB cable",
      "1× MPU6050 sensor module",
      "Breadboard",
      "4× Jumper wires",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-EN/master/E18-OLED-I2C-SSD1306-128X64/OLED-I2C-SSD1306-128X64.png",
    arduinoCode: `
#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

void setup(){
  Serial.begin(9600);
  Wire.begin();
  mpu.initialize();
}

void loop(){
  int16_t ax,ay,az;
  mpu.getAcceleration(&ax,&ay,&az);
  Serial.print("A: ");
  Serial.print(ax); Serial.print(" ");
  Serial.print(ay); Serial.print(" ");
  Serial.println(az);
  delay(500);
}`,
  },
];

export default arduinoTutorialsData;
