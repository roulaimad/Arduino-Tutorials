const arduinoTutorialsData = [
  {
    id: 1,
    title: "وميض المصباح المدمج",
    image: "https://i.ytimg.com/vi/PcusGFga46U/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=PcusGFga46U",
    description:
      "تعرّف على كيفية جعل LED المدمج يومض باستخدام منفذ أردوينو الرقمي…",
    tutorialGoals: [
      "جعل LED المدمج يومض",
      "العمل باستخدام بيئة أردوينو IDE",
      "معرفة كيفية رفع sketch إلى جهاز أردوينو",
    ],
    componentsNeeded: ["1× أردوينو", "1× كابل USB", "1× حاسوب"],
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
}
`,
    difficulty: "مبتدئ",
    tags: "أساسيات",
    time: "10",
    ratings: 4.5,
  },
  {
    id: 2,
    title: "وميض مصباح على لوحة تجارب",
    image: "https://i.ytimg.com/vi/Smfzx4WBb9o/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=Smfzx4WBb9o",
    description: "بناء دائرة أساسية وجعل مصباح خارجي يومض…",
    tutorialGoals: [
      "توصيل مصباح بلوحة التجارب",
      "استخدام digitalWrite",
      "التحكم في التأخيرات",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× مصباح",
      "1× مقاوم 220Ω",
      "2× أسلاك توصيل (Jumper wires)",
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
}
`,
    difficulty: "مبتدئ",
    tags: "أساسيات",
    time: "15",
    ratings: 4.2,
  },
  {
    id: 3,
    title: "تلاشي مصباح باستخدام PWM",
    image: "https://i.ytimg.com/vi/1fhRf-0RxyQ/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=1fhRf-0RxyQ",
    description: "تعلم PWM من خلال إنشاء تأثير تلاشي على مصباح…",
    tutorialGoals: [
      "فهم analogWrite وPWM",
      "تأثير التلاشي (Fade‑in/out)",
      "التحكم في مستوى السطوع",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× مصباح",
      "1× مقاوم 220Ω",
      "2× أسلاك توصيل",
    ],
    circuit:
      "https://raw.githubusercontent.com/BasOnTech/Arduino-Beginners-NL/master/E02-led-knipperen-breadboard/led-knipperen-breadboard.png",
    arduinoCode: `
const int ledPin = 9;
void setup() { pinMode(ledPin, OUTPUT); }
void loop() {
  for (int b = 0; b <= 255; b++){ analogWrite(ledPin,b); delay(10); }
  for (int b = 255; b >= 0; b--){ analogWrite(ledPin,b); delay(10); }
}
`,
    difficulty: "مبتدئ",
    tags: "PWM",
    time: "20",
    ratings: 4.7,
  },
  {
    id: 4,
    title: "التحكم بسرعة الوميض بمقاومة متغيرة",
    image: "https://i.ytimg.com/vi/3hGEusmU-vQ/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=3hGEusmU-vQ",
    description:
      "استخدام مقاومة متغيرة (Potentiometer) للتحكم في معدل وميض LED…",
    tutorialGoals: [
      "المدخل التناظري",
      "تعيين القيم (Mapping)",
      "معدل وميض ديناميكي",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× LED",
      "1× مقاوم 220Ω",
      "1× مقاومة متغيرة",
      "3× أسلاك توصيل",
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
}
`,
    difficulty: "مبتدئ",
    tags: "مقاومة متغيرة",
    time: "25",
    ratings: 4.3,
  },
  {
    id: 5,
    title: "التحكم بـ LED بزر ضغط على أردوينو",
    image: "https://i.ytimg.com/vi/5aR0cHKc-JA/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=5aR0cHKc-JA",
    description: "استخدام زر الضغط لتشغيل/إيقاف مصباح…",
    tutorialGoals: [
      "الدخل الرقمي",
      "مؤازمة الزر (debouncing)",
      "المنطق If/else",
    ],
    componentsNeeded: [
      "1× Arduino",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× مصباح",
      "1× مقاوم 220Ω",
      "1× زر ضغط",
      "1× مقاوم 10 kΩ",
      "4× أسلاك توصيل",
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
}
`,
    difficulty: "مبتدئ",
    tags: "زر ضغط",
    time: "30",
    ratings: 4.6,
  },
  {
    id: 6,
    title: "قراءة حساس الحرارة DS18B20 بنظام 1‑Wire",
    image: "https://i.ytimg.com/vi/NknCz0vC-RY/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=NknCz0vC-RY",
    description: "التعامل مع DS18B20 لقراءة درجة الحرارة…",
    tutorialGoals: ["1‑Wire", "بيانات الحرارة", "استخدام المكتبة"],
    componentsNeeded: [
      "1× Arduino",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× حساس DS18B20",
      "1× مقاوم 4.7 kΩ",
      "3× أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "مستشعرات",
    time: "35",
    ratings: 4.4,
  },
  {
    id: 7,
    title: "حساس المسافة بالموجات فوق الصوتية HC‑SR04",
    image: "https://i.ytimg.com/vi/nkSUFV7gCNU/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=nkSUFV7gCNU",
    description: "   قياس المسافة باستخدام حساس HC‑SR04…",
    tutorialGoals: ["توصيل trigger/echo", "توقيت pulseIn", "تحويل المسافة"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× حساس HC‑SR04",
      "4× أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "مستشعرات",
    time: "40",
    ratings: 4.8,
  },
  {
    id: 8,
    title: "ذراع PS2 التناظري مع زر",
    image: "https://i.ytimg.com/vi/AJLcq93glp0/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=AJLcq93glp0",
    description: "تعلم استخدام ذراع PS2 تناظري للمحاور X/Y وزر…",
    tutorialGoals: ["قراءة analogRead للمحاور X/Y", "حالة الزر", "تفسير الدخل"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× وحدة ذراع PS2",
      "5× أسلاك توصيل",
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
  Serial.print(" زر: "); Serial.println(btn == LOW ? "مضغوط" : "مفرج");
  delay(200);
}
`,
    difficulty: "متوسط",
    tags: "Joystick",
    time: "45",
    ratings: 4.1,
  },
  {
    id: 9,
    title: "مستقبل IR مع ريموت",
    image: "https://i.ytimg.com/vi/IYYOoyjQS-8/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=IYYOoyjQS-8",
    description: "فك شفرة إشارات IR باستخدام الريموت…",
    tutorialGoals: ["استقبال IR", "مكتبة IRremote", "التصرف بناءً على الأكواد"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× وحدة استقبال IR",
      "1× ريموت IR",
      "3× أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "لاسلكي",
    time: "50",
    ratings: 4.9,
  },

  {
    id: 10,
    title: "صوت من صفارة بيزو / مكبر صوت",
    image: "https://i.ytimg.com/vi/Ga-QI4166wI/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=Ga-QI4166wI",
    description: "توليد ألحان باستخدام صفارة بيزو…",
    tutorialGoals: ["tone()/noTone()", "التحكم بالصوت", "ألحان بسيطة"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× صفارة بيزو",
      "2× أسلاك توصيل",
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
}
`,
    difficulty: "مبتدئ",
    tags: "أساسيات",
    time: "20",
    ratings: 3.9,
  },
  {
    id: 11,
    title: "شاشة LCD عبر I2C مع نص ورموز",
    image: "https://i.ytimg.com/vi/SNt3UsMEqc8/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=SNt3UsMEqc8",
    description: "عرض نص على شاشة 16×2 باستخدام I2C…",
    tutorialGoals: [
      "توصيل I2C",
      "مكتبة LiquidCrystal_I2C",
      "رسائل متحركة (Scrolling)",
    ],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× شاشة I2C LCD (16×2)",
      "4× أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "شاشات",
    time: "40",
    ratings: 4.5,
  },
  {
    id: 12,
    title: "مشفّر دوّار (Rotary) والمقاطعات",
    image: "https://i.ytimg.com/vi/gPLpPFmv-Zc/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=gPLpPFmv-Zc",
    description: "استخدام مشفر دوّار (rotary) والمقاطعات…",
    tutorialGoals: [
      "توصيل المشفر",
      "استخدام المقاطعات (interrupts)",
      "اكتشاف الدوران",
    ],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× وحدة مشفّر دوّار",
      "3× أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "مشفّر دوّار",
    time: "45",
    ratings: 4.7,
  },
  {
    id: 13,
    title: "حساس الحرارة والرطوبةDHT11 ",
    image: "https://i.ytimg.com/vi/lrDl8NhMwQw/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=lrDl8NhMwQw",
    description: "قراءة الرطوبة والحرارة باستخدام DHT11…",
    tutorialGoals: ["التعامل مع DHT11", "قراءة الرطوبة", "العرض عبر Serial"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× وحدة حساس DHT11",
      "3× أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "مستشعرات",
    time: "35",
    ratings: 4.3,
  },
  {
    id: 14,
    title: "المحرك الخطوي",
    image: "https://i.ytimg.com/vi/4iRvjBwAzrM/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=4iRvjBwAzrM",
    description: "التحكم بمحرك خطوي عبر ULN2003…",
    tutorialGoals: [
      "التحكم بمحرك خطوي",
      "استخدام المكتبة",
      "التحكم بالسرعة/الاتجاه",
    ],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× محرك خطوي 28BYJ‑48",
      "1× وحدة سائق ULN2003",
      "أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "محركات",
    time: "50",
    ratings: 4.6,
  },
  {
    id: 15,
    title: "كشف مدة ضغط الزر ",
    image: "https://i.ytimg.com/vi/TD7vjJy0w8U/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=TD7vjJy0w8U",
    description: "كشف الضغط القصير مقابل الطويل على الزر…",
    tutorialGoals: ["مدة الضغط", "منطق الضغط الطويل"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× زر ضغط",
      "1× مقاوم 10 kΩ",
      "لوحة تجارب",
      "أسلاك توصيل",
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
}
`,
    difficulty: "متوسط",
    tags: "زر ضغط",
    time: "30",
    ratings: 4.2,
  },
  {
    id: 16,
    title: "شاشة العرض LCD ",
    image: "https://i.ytimg.com/vi/aACOC9XBBks/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=aACOC9XBBks",
    description: "تشغيل شاشة LCD باستخدام مفرّع I/O PCF8574…",
    tutorialGoals: ["توسيع I/O", "اتصال I2C", "التحكم بـ LCD"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× لوحة تجارب",
      "1× وحدة PCF8574",
      "1× شاشة I2C LCD (16×2)",
      "أسلاك توصيل",
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
    difficulty: "متقدم",
    tags: "شاشات",
    time: "60",
    ratings: 4.4,
  },
  {
    id: 17,
    title: "مسجل بيانات الحرارة باستخدام بطاقة الذاكرة",
    image: "https://i.ytimg.com/vi/OXieoH5IsAI/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=OXieoH5IsAI",
    description: "تسجيل قراءات الحرارة إلى بطاقة الذاكرة",
    tutorialGoals: ["اتصال SPI", "معالجة الملفات", "بنية البيانات"],
    componentsNeeded: [
      "1× أردوينو",
      "1× كابل USB",
      "1× وحدة بطاقة SD",
      "1× بطاقة SD",
      "1× حساس حرارة",
      "لوحة تجارب",
      "أسلاك توصيل",
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
    Serial.println("فشل SD");
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
}
`,
    difficulty: "متقدم",
    tags: "تخزين",
    time: "75",
    ratings: 4.8,
  },
  {

    id: 18,
    title: "حساس التسارع والدوران ",
    image: "https://i.ytimg.com/vi/m67vZaXu0zY/mqdefault.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=m67vZaXu0zY",
    description: "  قراءة التسارع والدوران من الحساس",
    tutorialGoals: [
      "تواصل I2C",
      "بيانات التسارع والجييروسكوب",
      "تفسير البيانات",
    ],
    componentsNeeded: [
      "1× الحساس",
      "1× كابل USB",
      "1× وحدة MPU6050",
      "لوحة تجارب",
      "4× أسلاك توصيل",
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
  Serial.print(ay);
  Serial.println(az);
  delay(500);
}
`,
    difficulty: "متقدم",
    tags: "مستشعرات",
    time: "65",
    ratings: 4.5,
  },
];

export default arduinoTutorialsData;
