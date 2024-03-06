import streamlit as st
from PIL import Image

def main():
    st.set_page_config(page_title="My Animals App", page_icon="🐾", layout="wide", initial_sidebar_state="expanded")

    logo = Image.open("OOP-project/streamlit/pictures/cat03.jpg)
    logo_resized = logo.resize((1500, 500))
    st.image(logo_resized, use_column_width=False)

st.set_page_config(theme={
      "primaryColor": "#333333",
      "backgroundColor": "#ffffff",
      "secondaryBackgroundColor": "#f0f0f0",
      "textColor": "#262730",
      "font": "sans serif",
    })

    st.markdown("""
    **Adopt don't shop!**

    การรับเลี้ยงสัตว์ที่ถูกทิ้ง เป็นการช่วยเหลือพวกเขาให้มีชีวิตใหม่

    **ทำไมการรับเลี้ยงสัตว์จึงสำคัญ?**

    * ช่วยให้สัตว์ที่ถูกทิ้งมีบ้าน
    * ช่วยลดจำนวนสัตว์ในศูนย์พักพิง
    * เป็นการให้โอกาสสัตว์ได้มีครอบครัว

    **คุณสามารถช่วยอะไรได้บ้าง?**

    * รับเลี้ยงสัตว์จากศูนย์พักพิง
    * บริจาคเงินหรือสิ่งของให้กับศูนย์พักพิง
    * บอกต่อคนอื่นเกี่ยวกับการรับเลี้ยงสัตว์

    **มาช่วยกันสร้างโลกที่สัตว์ทุกตัวมีบ้านกันเถอะ!**
""")

    selected_option = st.sidebar.radio("Menu", ["Home", "Popular Animals", "Donate", "About", "Contact"])

    if selected_option == "Home":
        display_home()

    elif selected_option == "Popular Animals":
        display_top_animals()

    elif selected_option == "Donate":
        display_donate()

    elif selected_option == "About":
        display_about()

    elif selected_option == "Contact":
        display_contact()

def display_home():
    st.markdown("<h1>Home</h1>")
    st.write("Welcome to the Adopt Animals app, where you can find and connect with your loving furry friends waiting to be adopted!")

    st.image("OOP-project/streamlit/pictures/home_image.jpg", use_column_width=True)

    st.markdown("""
        ### Why adopt?
        Adopting an abandoned animal not only fills their life with love and happiness but also yours!
    """)

    st.markdown("""
        ### How to use
        Select the menu on the side to explore more information such as popular animals, donation programs, about us, and contact us.
    """)

def display_top_animals():
  st.markdown("<h1>สัตว์ทั้งหมด</h1>")

  if st.button("ดูข้อมูลทั้งหมด"):
    display_all_animals()

  animal_type = st.selectbox("ประเภทสัตว์", ["ทั้งหมด"] + list(set(animal["type"] for animal in animals)))
  animal_gender = st.selectbox("เพศ", ["ทั้งหมด", "ตัวผู้", "ตัวเมีย"])
  animal_age_range = st.selectbox("ช่วงอายุ", ["ทั้งหมด", "1-2 ปี", "3-4 ปี", "5 ปีขึ้นไป"])

  filtered_animals = [animal for animal in animals if 
    (animal_type == "ทั้งหมด" or animal["type"] == animal_type) and
    (animal_gender == "ทั้งหมด" or animal["gender"] == animal_gender) and
    (animal_age_range == "ทั้งหมด" or animal_age_range == f"{animal['age']}-{animal['age']+1} ปี")]

  for animal in filtered_animals:
    display_animal(animal)

def display_all_animals():
  st.markdown("<h1>รายชื่อสัตว์ทั้งหมด</h1>")
  for animal in animals:
    display_animal(animal)

animals = [
    {
        "type": "แมว",
        "breed": "แมวไทย",
        "gender": "ตัวเมีย",
        "age": "1-2 ปี",
        "personality": "ขี้อ้อน เล่นซน",
        "image": "OOP-project/streamlit/pictures/cat02.jpg",
        "contact": {
            "name": "นายมีมิ่งสุข จันทร์เขียว",
            "phone": "095-000-0000",
            "email": "meekun.2456@example.com"
        },
        "additional_info": {
            "reason": "ต้องการเพื่อนเล่นแก้เหงา",
            "location": "คอนโดมิเนียม",
            "experience": "เคยเลี้ยงแมวมาก่อน",
            "other": "พร้อมที่จะดูแลแมวอย่างเต็มที่"
        }
    },
        {
        "type": "สุนัข",
        "breed": "สุนัขพันธุ์ไทย",
        "gender": "ตัวผู้",
        "age": "4-5 ปี",
        "personality": "ขี้ตกใจ ฉลาด",
        "image": "OOP-project/streamlit/pictures/dog01.jpg",
        "contact": {
            "name": "น.ส.สมหญิง แกร่งกล้า",
            "phone": "061-000-0000",
            "email": "miracle.miracle@example.com"
        },
        "additional_info": {
            "reason": "ต้องการเพื่อนเล่นแก้เหงา",
            "location": "ต้องการหาบ้านใหม่",
            "experience": "เคยเลี้ยงหมามาก่อน",
            "other": "พร้อมที่จะดูแลหมาอย่างเต็มที่"
        }
    },
        {
        "type": "แมว",
        "breed": "แมวเปอร์เซีย",
        "gender": "ตัวผู้",
        "age": "2-3 ปี",
        "personality": "โลกส่วนตัวสูง กินจุ",
        "image": "OOP-project/streamlit/pictures/cat04.jpg",
        "contact": {
            "name": "น.ส.ปิยฉัตร วันใส",
            "phone": "084-000-0000",
            "email": "piyachat.va.66@ubu.ac.th"
        },
        "additional_info": {
            "reason": "ต้องการเพื่อนเล่นแก้เหงา",
            "location": "คอนโดมิเนียม",
            "experience": "เคยเลี้ยงแมวมาก่อน",
            "other": "พร้อมที่จะดูแลแมวอย่างเต็มที่"
        }
    },
        {
        "type": "แมว",
        "breed": "แมวลายสลิด",
        "gender": "ตัวเมีย",
        "age": "3-4 ปี",
        "personality": "ใจดี รักเด็ก",
        "image": "OOP-project/streamlit/pictures/cat01.jpg",
        "contact": {
           "name": "น.ส.สมใจ สุขใจ",
           "phone": "085-000-0000",
           "email": "somjai.sukjai@example.com"
        },
        "additional_info": {
        "reason": "ต้องการหาบ้านใหม่",
        "location": "คอนโดมิเนียม",
        "experience": "เคยเลี้ยงแมวมาก่อน",
        "other": "แมวได้รับวัคซีนครบแล้ว"
        }
    },
        {
        "type": "สุนัข",
        "breed": "พันธุ์ผสม",
        "gender": "ตัวผู้",
        "age": "1-2 ปี",
        "personality": "ร่าเริง ซุกซน",
        "image": "OOP-project/streamlit/pictures/dog02.jpg",
        "contact": {
           "name": "นายสมชาย ใจดี",
           "phone": "086-000-0000",
           "email": "somchai.jaidee@example.com"
        },
        "additional_info": {
        "reason": "ถูกทิ้ง",
        "location": "บ้าน",
        "experience": "ไม่เคยเลี้ยงสุนัขมาก่อน",
        "other": "ต้องการหาครอบครัวที่อบอุ่น"
        }
    },        
    ]

def display_animal(animal):
    st.markdown("## ข้อมูลสัตว์ที่ต้องการรับเลี้ยง")

    st.image(animal["image"])

    st.markdown(f"**ประเภทสัตว์:** {animal['type']}")
    st.markdown(f"**สายพันธุ์:** {animal['breed']}")
    st.markdown(f"**เพศ:** {animal['gender']}")
    st.markdown(f"**อายุ:** {animal['age']}")
    st.markdown(f"**ลักษณะนิสัย:** {animal['personality']}")

    st.markdown("### ข้อมูลติดต่อ")
    st.markdown(f"**ชื่อ:** {animal['contact']['name']}")
    st.markdown(f"**เบอร์โทรศัพท์:** {animal['contact']['phone']}")
    st.markdown(f"**อีเมล:** {animal['contact']['email']}")

    st.markdown("### ข้อมูลเพิ่มเติม")
    st.markdown(f"**เหตุผลที่ต้องการรับเลี้ยง:** {animal['additional_info']['reason']}")
    st.markdown(f"**สถานที่เลี้ยง:** {animal['additional_info']['location']}")
    st.markdown(f"**ประสบการณ์การเลี้ยงสัตว์:** {animal['additional_info']['experience']}")
    st.markdown(f"**ข้อมูลอื่นๆ:** {animal['additional_info']['other']}")


def display_donate():
    st.markdown("<h1>Donate</h1>")
    st.write("You can donate to help abandoned or injured animals.")

    donation_causes = ["Animal Shelters", "Wildlife Conservation", "Veterinary Care"]
    selected_cause = st.selectbox("Select a cause", donation_causes)

    donation_amount = st.number_input("Donation Amount ($)", min_value=1, value=10)
    st.write(f"You've selected to donate ${donation_amount} to {selected_cause}.")

    payment_methods = ["Credit Card", "Bank Transfer", "PayPal"]
    selected_payment_method = st.selectbox("Select Payment Method", payment_methods)

    st.write(f"Selected Payment Method: {selected_payment_method}")

    if st.button("Confirm Donation"):
        st.success("Your donation has been received successfully!")

def display_about():
    st.markdown("<h1>About</h1>")
    st.write("This application is developed by students from Ubon Ratchathani University.")

def display_contact():
    st.markdown("<h1>Contact</h1>")
    st.write("If you have any questions or inquiries, please contact us:")
    st.write("Email: [piyachat.va.66@ubu.ac.th](mailto:piyachat.va.66@ubu.ac.th)")
    st.write("Or fill out the contact form at [this link](#)")

    st.write(html_content, unsafe_allow_html=True)

if __name__ == "__main__":
    main()