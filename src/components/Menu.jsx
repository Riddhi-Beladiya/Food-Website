import React from "react";

const Menu = () => {
  const categories = [
    { id: 1, name: "Fast Food", img: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Sandwich_PNG_Clipart_Image.png?m=1629797887" },
    { id: 2, name: "Beverages", img: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Sandwich_PNG_Clipart_Image.png?m=1629797887" },
    { id: 3, name: "Desserts", img: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Sandwich_PNG_Clipart_Image.png?m=1629797887" },
    { id: 4, name: "Healthy", img: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Sandwich_PNG_Clipart_Image.png?m=1629797887" },
  ];

  const menuItems = [
    { id: 1, name: "Chinese Pasta", desc: "It's a testament to our.", price: "$99.9", img: "https://fresheat-react.vercel.app/assets/img/menu/menuThumb1_1.png" },
    { id: 2, name: "Fried Rice", desc: "It's a testament to our.", price: "$59.9", img: "https://fresheat-react.vercel.app/assets/img/menu/menuThumb1_2.png" },
    { id: 3, name: "Sandwich", desc: "It's a testament to our.", price: "$20.9", img: "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Fast-Food-PNG-Clipart/Sandwich_PNG_Clipart_Image.png?m=1629797887" },
    { id: 4, name: "Burger", desc: "It's a testament to our.", price: "$9.9", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFlp9MlqnOJdsCaMPRg1DefFZEkN8_8InL9g&s" },
    { id: 5, name: "Pizza", desc: "It's a testament to our.", price: "$99.9", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6Bd-Kl0uTVthEoN8vTSUaJ6SpfsgkXs-EQ&s" },
    { id: 6, name: "Fries", desc: "It's a testament to our.", price: "$25.9", img: "https://e7.pngegg.com/pngimages/955/14/png-clipart-fried-fries-french-fries-hamburger-potato-european-cuisine-fast-food-delicious-fried-potatoes-food-eating-thumbnail.png" },
  ];

  return (
    <div className="h-[600px] bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[80%] h-[500px] flex flex-col items-center justify-center shadow-lg rounded-lg space-y-3">
        
        {/* Heading Section */}
        <h1 className="text-yellow-600 text-xl font-bold uppercase">Food Menu</h1>
        <p className="text-black font-bold text-center w-[70%] text-3xl">Fresheat Foods Menu</p>
        
        {/* Category Section */}
        <div className="grid grid-cols-4 gap-6 px-6 rounded-lg">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2 border-r pr-4 last:border-none">
              <img src={category.img} alt={category.name} className="w-10 h-10" />
              <p className="text-lg font-medium">{category.name}</p>
            </div>
          ))}
        </div>

        {/* Menu Items Section */}
        <div className="border-t w-[80%] border-gray-400 py-3">
          <div className="grid grid-cols-2 gap-4">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between px-2">
                <img src={item.img} alt={item.name} className="w-18 h-18 object-cover" />
                <div>
                  <h3 className="font-semibold text-xl">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                <span className="font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Menu;
