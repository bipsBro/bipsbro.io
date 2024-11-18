import classNames from "classnames";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
type SidebarProps = {
  className?: string;
};

const navigation = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Portfolio", href: "portfolio" },
  { name: "Blogs", href: "blogs" },
  { name: "Contact", href: "contact" },
];

export default function Sidebar({ className }: SidebarProps) {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      let headerOffset = 20;
      let elementPosition = target.getBoundingClientRect().top;
      let offsetPosition = elementPosition - headerOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 shadow">
        <Disclosure as="nav" className="bg-blue-700">
          <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <div className="rounded-lg overflow-hidden h-12 w-12 border-white/20 border-2">
                    <img src="bipin-pandey.jpg" />
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md transition-all ease-in-out bg-gray-300 p-2 text-blue-700 hover:bg-gray-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="block size-6 group-data-[open]:hidden"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="hidden size-6 group-data-[open]:block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item, i) => (
                <a
                  key={i}
                  onClick={onPress}
                  href={`#${item.href}`}
                  className=""
                >
                  <div
                    className="px-2 py-1 transition-all text-white hover:font-bold hover:bg-gray-300 hover:text-blue-700 rounded"
                    data-to-scrollspy-id={item.href}
                  >
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <div
        className={classNames(
          "hidden lg:block w-80 bg-blue-700 h-screen text-white text-center sticky top-0",
          className
        )}
      >
        <div className="h-32 bg-yellow-400 flex items-center justify-center">
          <div className="rounded-full overflow-hidden h-44 w-44 mt-28 border-white/20 border-8">
            <img src="bipin-pandey.jpg" />
          </div>
        </div>
        <div className="pt-32 space-y-3 flex flex-col px-2">
          {navigation.map((n, i) => (
            <a key={i} onClick={onPress} href={`#${n.href}`}>
              <div className="p-2" data-to-scrollspy-id={n.href}>
                {n.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
