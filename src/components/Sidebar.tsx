import classNames from "classnames";

type SidebarProps = {
  className?: string;
};
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
    <div
      className={classNames(
        "w-96 bg-blue-700 h-screen text-white text-center sticky top-0",
        className
      )}
    >
      <div className="h-32 bg-yellow-400 flex items-center justify-center">
        <div className="rounded-full overflow-hidden h-44 w-44 mt-28 border-white/20 border-8">
          <img src="bipin-pandey.jpg" />
        </div>
      </div>
      <div className="pt-32 space-y-3 flex flex-col px-2">
        <a onClick={onPress} href={"#home"}>
          <div className="p-2" data-to-scrollspy-id="home">
            Home
          </div>
        </a>
        <a onClick={onPress} href={"#about"}>
          <div className="p-2" data-to-scrollspy-id="about">
            about
          </div>
        </a>
        <a onClick={onPress} href={"#service"}>
          <div className="p-2" data-to-scrollspy-id="service">
            service
          </div>
        </a>
        <a onClick={onPress} href={"#portfolio"}>
          <div className="p-2" data-to-scrollspy-id="portfolio">
            portfolio
          </div>
        </a>
        <a onClick={onPress} href={"#blogs"}>
          <div className="p-2" data-to-scrollspy-id="blogs">
            blogs
          </div>
        </a>
        <a onClick={onPress} href={"#contact"}>
          <div className="p-2" data-to-scrollspy-id="contact">
            contact
          </div>
        </a>
      </div>
    </div>
  );
}
