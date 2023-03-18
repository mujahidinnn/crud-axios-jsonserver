const ModalDelete = () => {
  return (
    <div className="fixed bg-[rgba(0,0,0,0.25)] flex justify-center items-center inset-0 z-50">
      <div className="bg-white rounded-xl p-10 flex flex-col justify-between h-[200px]">
        <h1 className="text-2xl font-bold">Are you sure to delete id: ?</h1>
        <hr />
        <div className="flex gap-3 w-full">
          <button className="w-full text-white bg-green-500 font-semibold px-3 py-2 rounded-lg">
            Cancel
          </button>
          <button className="w-full text-white bg-red-500 font-semibold px-3 py-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
