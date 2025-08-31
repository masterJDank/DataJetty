import Breadcrumb from "../components/ui/breadcrumb";
import Footer from "../components/ui/footer";
import styles from "./ui-guide/ui-guide.module.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col" >
      <div
        className={`navbar ${styles.navigation} shadow-sm h-20 gap-x-4 px-10 `}
      >
        <div className="flex items-center gap-2">
          <img src="datajettynav.avif" className="h-14" alt="" />
        </div>

        <button className="ms-auto text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9  cursor-pointer font-normal no-underline px-3 py-2 rounded-md transition-colors text-gray-200 hover:text-white hover:bg-gray-800">
          Home
        </button>
        <button className="text-sm  inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9  cursor-pointer font-normal no-underline px-3 py-2 rounded-md transition-colors text-gray-200 hover:text-white hover:bg-gray-800">
          Tickets
        </button>
        <button className="text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9  cursor-pointer font-normal no-underline px-3 py-2 rounded-md transition-colors text-gray-200 hover:text-white hover:bg-gray-800">
          Logs
        </button>
        <details className="dropdown me-auto">
          <summary className="text-sm inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive underline-offset-4 hover:underline h-9  cursor-pointer font-normal no-underline px-3 py-2 rounded-md transition-colors text-gray-200 hover:text-white hover:bg-gray-800">
            UI-Guide
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      <div className=" flex-1 px-10 pt-4 pb-8 ">
        <div className="">
          <Breadcrumb
            items={[
              { label: "Home", href: "/login" },
              { label: "UI Guide", href: "/ui-guide" },
            ]}
          />
        </div>

        {children}

       
      </div>
       <Footer
          Support="ui-guide"
          TermOfService="/ui-guide"
          privacyPolicy="/ui-guide"
          version="0.1.1 31-08.2025 18:34"
        />
    </div>
  );
}
