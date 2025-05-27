📦 Custom React UI Component Library
A customizable UI component library built using React and styled with Tailwind CSS. This library includes reusable components such as modals, buttons, navigation layouts, popups, search bars, and more, making it easier to build modern web applications quickly.

✨ Features
📚 Component-based architecture for reusability

🎨 Tailwind CSS for utility-first styling

🧩 Custom modal and popup logic with centralized control

🔍 Built-in search bar and GPT-powered search variant

🧱 Layout components for full-page applications

📦 Includes routing with React Router

🧪 Easy-to-use props API

🚀 Getting Started
Installation
You can clone or copy the source code into your React project. Make sure you have the following installed:

bash
Copy
Edit
npm install react react-dom react-router-dom tailwindcss
Tailwind CSS Setup
Ensure you have Tailwind CSS configured in your project. Tailwind Setup Docs

🧩 Available Components
✅ CustomModal
A customizable modal dialog.

Props:
{
  props: {
    title: string;
    modalContent: string;
  },
  show: boolean,
  optionalButton?: string,
  handlePopOver: (boolean) => void
}
Example:

jsx
<CustomModal
  props={{ title: "My Custom Modal", modalContent: "Lorem ipsum..." }}
  show={showOrHide}
  optionalButton="Okay"
  handlePopOver={handlePopOver}
/>
✅ CustomPopUp
A small popup component to show lightweight info or alerts.

Props: Same as CustomModal.

✅ SearchBar
A standard search bar input field.

✅ SearchBarGPT
A GPT-enhanced version of the search bar for smart querying.

✅ PageLayout
A full-page layout wrapper.

Props:

{
  TopNavComponent,
  SideNavComponent,
  MainComponent,
  SideContentComponent,
  FooterComponent
}
✅ CustomButton
A reusable button with variant styling.

Props:
{
  props: {
    bgColor: string;
    textColor: string;
    buttonType: "solid" | "outline";
    performActionOnButtonClick: () => void;
  }
}
✅ Menu
A menu component rendered from a data list.
{
  dataList: string[]
}
✅ BreadCrumb
A breadcrumb navigation component for tracking user path.

✅ Routing Example
<Routes>
  <Route path="/cart" element={<Cart />} />
  <Route path="/billing" element={<Billing />} />
  <Route path="/shipping" element={<Shipping />} />
  <Route path="/payment" element={<Payment />} />
</Routes>

🛠 Example Usage jsx
const [showOrHide, setShowOrHide] = useState(false);
const handlePopOver = (value) => setShowOrHide(value);
const modalInfo = { title: "Modal Title", modalContent: "Details here" };

<CustomModal
  props={modalInfo}
  show={showOrHide}
  optionalButton="Okay"
  handlePopOver={handlePopOver}
/>
🧾 License
MIT License

🙌 Contributing
Feel free to open issues or PRs to improve or extend the component library.


