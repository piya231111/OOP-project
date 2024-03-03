import streamlit as st
from PIL import Image

def main():
    st.set_page_config(page_title="My Animals App", page_icon="🐾", layout="wide", initial_sidebar_state="expanded")

    logo = Image.open("OOP-project/streamlit/pictures/animals00.jpg")
    logo_resized = logo.resize((1500, 500))
    st.image(logo_resized, use_column_width=False)

    st.markdown("""
    <style>
        body {
            color: #333;
            background-color: #f8f9fa;
        }
        h1 {
            color: #007bff;
        }
        .sidebar .sidebar-content {
            background-color: #007bff;
            color: #fff;
        }
    </style>
""", unsafe_allow_html=True)

    st.markdown("""
        ## **Adopt don't shop**  
        การรับเลี้ยงสัต์ที่ถูกทิ้ง สามารถต่อชีวิตพวกเขาให้ยืนนาน!
    """)

    st.markdown("## อันดับสัตว์ที่นิยมเลี้ยงมากที่ได้แก่อะไรบ้าง?")

    st.markdown("## แมว") 
    st.image("OOP-project/streamlit/pictures/cat__00.jpg" ,use_column_width=True)
    st.write("แมว (Cat): แมวเป็นสัตว์เลี้ยงที่คนไทยนิยมเลี้ยงอย่างกว้างขวาง เป็นสัตว์ที่น่ารักและเป็นมิตร แมวสามารถปรับตัวให้เหมาะสมกับสภาพแวดล้อมที่อยู่อยู่ได้ง่าย นอกจากนี้ยังมีพฤติกรรมที่น่าสนุกและน่าติดตามในการเลี้ยงดู")

    st.markdown("## สุนัข") 
    st.image("OOP-project/streamlit/pictures/dog__00.jpg" ,use_column_width=True)
    st.write("สุนัข (Dog): สุนัขเป็นสัตว์เลี้ยงที่คนไทยนิยมเลี้ยงในบ้านอีกสัตว์หนึ่ง สุนัขมีความภูมิใจในความภักดีและจิตใจที่ดีของสัตว์เลี้ยงที่มีความภูมิใจในการปกป้องบ้านและคนในครอบครัว")

    st.markdown("## กระต่าย") 
    st.image("OOP-project/streamlit/pictures/rabbit__00.jpg" ,use_column_width=True)
    st.write("กระต่าย (Rabbit): กระต่ายเป็นสัตว์ที่น่ารักและเป็นมิตร มีขนนุ่มนวลและถูกใจคนที่ชอบสัตว์ที่น่ารัก การเลี้ยงกระต่ายในบ้านสามารถดูแลและซ่อมแซมที่พื้นที่จำกัดได้ง่าย")

    st.markdown("## แฮมสเตอร์") 
    st.image("OOP-project/streamlit/pictures/hamster__00.jpg" ,use_column_width=True)
    st.write("แฮมสเตอร์ (Hamster): ใครที่กำลังริเริ่มอยากมีสัตว์เลี้ยงเป็นของตัวเอง แบบฉบับที่ไม่ต้องเปลืองพื้นที่ แถมยังเลี้ยงง่าย แต่ไม่รู้ว่าจะเลี้ยงอะไรดี เจ้าหนูแฮมเตอร์ สัตว์ฟันแทะที่ได้รับความนิยมอย่างมากอีกชนิดหนึ่ง ถือเป็นหนึ่งในสัตว์เลี้ยงตัวจิ๋วที่ตอบโจทย์ทั้งเลี้ยงง่ายแถมยังไม่ต้องใช้พื้นที่เยอะ")

    st.markdown("## ไก่") 
    st.image("OOP-project/streamlit/pictures/chicken__00.jpg" ,use_column_width=True)
    st.write("ไก่ (Chicken): Kanari น้อยคนที่จะนึกถึงไก่หากไม่ได้ชื่นชอบเป็นทุนเดิม แต่ไก่ที่การนำมาเลี้ยงเป็นไก่สวยงามในปัจจุบันก็มีอยู่หลายสายพันธุ์ ทั้งไก่ญี่ปุ่นขนทอง ไก่โปรแลนด์ หรือแม้แต่ไก่แจ้ไทย")

    menu = ["Home", "Sign In", "Create Account", "Donate", "My Account", "Signup"]
    choice1 = st.sidebar.selectbox('Menu', menu)
    st.markdown("") 
    st.markdown("")
    html_content = """
        <div style='text-align: center;'>
            <h3>Questions or Concerns?</h3>
            <p>Need help Send us a message!</p>
            <p><strong>Perfect</strong></p>
            <p><a href="mailto:piyachat.va.66@ubu.ac.th">piyachat.va.66@ubu.ac.th</a></p>
        </div>
    """

    
    st.write(html_content, unsafe_allow_html=True)

    if choice1 == "Home":
        st.write("Welcome to the Home Page!")

    elif choice1 == "Sign In":
        st.subheader("Account sign in")

        username = st.text_input("Email")
        password = st.text_input("Password", type='password')
        
        if st.button('Sign In'):
            st.success('Sign In as {}'.format(username))

            task = st.selectbox("Task", ["Add Post", "Analytics", "Profiles"])
            if task == "Add Post":
                st.subheader("Add your post")
                st.write("You can add your post here.")

            elif task == "Analytics":
                st.subheader("Analytics")
                st.write("Here you can view the analytics.")

            elif task == "Profiles":
                st.subheader("User Profiles")
                st.write("View and manage user profiles here.")

    elif choice1 == "Create Account":
        st.subheader("Create Account")
        st.write("Create a new account here.")
        first_name = st.text_input("First name")
        last_name = st.text_input("Last name")
        email = st.text_input("Email")
        phone = st.text_input("Phone(optional)")
        new_password = st.text_input("Password", type='password')

        if st.button("Create Account"):
            st.success("You have successfully created a valid account.")
            st.info("Proceed to login to access your account.")

    elif choice1 == "Donate":
        st.write("Welcome to the Donation Page!")
        st.write("คุณสามสามารบริจาคเป็นการสมทบทุนเพื่อช่วยเลือสัตว์ที่ไม่มีเจ้าของหรือบาดเจ็บได้!")
        selected_cause = st.selectbox("Select a cause", ["PayPal", "True Money", "Pay by bank"])
        donation_amount = st.number_input("Donation Amount ($)", min_value=1, value=10)
        st.write(f"You've selected to donate ${donation_amount} to {selected_cause}.")
        if st.button("Confirm Donation"):
            st.success("Your donation has been received successfully!")

    elif choice1 == "My Account":
        st.subheader("User Information")
        st.write("No user information available. Please create an account first.")

    elif choice1 == "Signup":
        st.subheader("Create New Account")
        new_user = st.text_input("Username")
        new_password = st.text_input("Password", type='password')

        if st.button("Signup"):
            st.success("You have successfully created an valid Account")
            st.info("Go to login to login")

if __name__ == "__main__":
    main()
          