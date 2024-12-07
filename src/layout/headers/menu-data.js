const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Pages",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/contact", title: "Contact" },
      { link: "/check-out", title: "Check Out" },
      { link: "/faq", title: "FAQ" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Sign In" },
    ],
  },
  {
    id: 3,
    title: "Instructor",
    link: "/instructor",
    has_dropdown: true,
    sub_menus: [
      { link: "/instructor", title: "Instructor" },
      { link: "/instructor-profile", title: "Instructor Profile" },
    ],
  },
  {
    id: 4,
    title: "Course",
    link: "/course-grid",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
  },
];
export default menu_data;
