import Image from "next/image";

const Header: React.FC = () => (
  <header className="bg-gray-100 py-6">
    <div className="container mx-auto flex items-center space-x-4">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={80}
        height={80}
        className="rounded-full"
      />
      <h1 className="text-2xl font-bold">DongHoon Jeong</h1>
    </div>
  </header>
);

export default Header;
