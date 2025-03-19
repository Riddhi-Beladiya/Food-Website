import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AddFoodData = () => {
  const [foodData, setFoodData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({ image: "", name: "", price: "" });

  // Fetch food data from Firebase
  useEffect(() => {
    fetch("https://fooddata-f715f-default-rtdb.firebaseio.com/fooddata.json")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = Object.entries(data || {}).map(
          ([key, value]) => ({
            uniqueId: key,
            ...value,
          })
        );
        setFoodData(formattedData);
      })
      .catch((error) => console.error("Error fetching food data:", error));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open modal for adding or editing
  const handleOpenModal = (food = null) => {
    setEditData(food);
    setFormData(
      food
        ? { image: food.image, name: food.name, price: food.price }
        : { image: "", name: "", price: "" }
    );
    setIsOpen(true);
  };

  // Handle delete confirmation modal
  const handleDeleteConfirmation = (uniqueId) => {
    setDeleteId(uniqueId);
    setIsDeleteOpen(true);
  };

  // Handle deletion of food item
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await fetch(
        `https://fooddata-f715f-default-rtdb.firebaseio.com/fooddata/${deleteId}.json`,
        {
          method: "DELETE",
        }
      );

      setFoodData((prevData) =>
        prevData.filter((item) => item.uniqueId !== deleteId)
      );
      setIsDeleteOpen(false);
      console.log("Food item deleted successfully");
    } catch (error) {
      console.error("Error deleting food item:", error);
    }
  };

  // Handle form submission (Add/Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editData) {
      // Update existing item
      try {
        await fetch(
          `https://fooddata-f715f-default-rtdb.firebaseio.com/fooddata/${editData.uniqueId}.json`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        setFoodData((prevData) =>
          prevData.map((item) =>
            item.uniqueId === editData.uniqueId
              ? { uniqueId: item.uniqueId, ...formData }
              : item
          )
        );

        console.log("Food item updated successfully");
      } catch (error) {
        console.error("Error updating food item:", error);
      }
    } else {
      // Add new item
      try {
        const response = await fetch(
          "https://fooddata-f715f-default-rtdb.firebaseio.com/fooddata.json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) throw new Error("Failed to add food item");

        const data = await response.json();
        const uniqueId = data.name; // Firebase returns the unique key

        setFoodData([...foodData, { uniqueId, ...formData }]);
        console.log("Food item added successfully");
      } catch (error) {
        console.error("Error adding food item:", error);
      }
    }

    setIsOpen(false);
  };

  return (
    <div className="ml-[15%] w-[85%] p-5">
      <h2 className="text-xl font-bold mb-4">Food Data</h2>

      {/* Add Food Button */}
      <button
        className="border bg-amber-500 px-4 py-2 rounded text-white"
        onClick={() => handleOpenModal()}
      >
        Add Food
      </button>

      {/* Pop-up Modal for Add/Edit */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-4">
              {editData ? "Edit Food" : "Add Food"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block">Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  required
                />
              </div>

              <div>
                <label className="block">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  required
                />
              </div>

              <div>
                <label className="block">Price ($):</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  {editData ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
            <p>
              Do you really want to delete this food item? This action cannot be
              undone.
            </p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsDeleteOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Food Table */}
      <div className="overflow-x-auto mt-5">
        <table className="w-[60%] min-w-max border-collapse border border-gray-300 mx-auto">
          <thead>
            <tr className="bg-gray-200 text-sm">
              <th className="border p-2">Unique ID</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price ($)</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {foodData.map((food) => (
              <tr key={food.uniqueId} className="text-center text-sm">
                <td className="border p-2 break-all">{food.uniqueId}</td>
                <td className="border p-2">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-12 h-12 object-cover mx-auto"
                  />
                </td>
                <td className="border p-2">{food.name}</td>
                <td className="border p-2">{food.price}</td>
                <td className="border p-2">
                  <div className="flex justify-center gap-2">
                    <FaEdit
                      className="text-blue-500 hover:text-red-500 cursor-pointer text-2xl"
                      onClick={() => handleOpenModal(food)}
                    />
                    <MdDeleteForever
                      className="text-red-500 hover:text-black cursor-pointer text-2xl"
                      onClick={() => handleDeleteConfirmation(food.uniqueId)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddFoodData;
