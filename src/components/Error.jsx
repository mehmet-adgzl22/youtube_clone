const Error = ({ message }) => {
  return (
    <div className="bg-red-500 h-fit rounded p-4 flex flex-col gap-5 mt-44 mx-auto">
      <p>Üzgünüz Bir Hata Oluştu Daha Sonra Tekrar Deneyiniz</p>

      <h2 className="font-semibold">{message}</h2>
    </div>
  );
};

export default Error;
