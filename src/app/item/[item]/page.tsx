export default function ItemPage({ params }: { params: { item: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-semibold capitalize">{params.item} Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nihil,
        magnam alias repellendus perspiciatis temporibus earum optio ad
        voluptas! In dolore reiciendis sint! Qui, nam pariatur? Sint
        necessitatibus officia, beatae ad rem molestias aperiam consequatur vel
        quia maiores exercitationem esse porro dicta nostrum mollitia eaque
        provident sequi tenetur eligendi, quam quibusdam ipsam tempora. Nobis
        cum debitis ut dolores possimus minus deserunt maiores assumenda vel
        delectus magnam ea, dolore ratione atque. Mollitia culpa, autem quidem
        porro officiis neque. Veniam eos repudiandae quisquam voluptas,
        perferendis nesciunt non nihil obcaecati amet nobis provident tempore
        id? Sit animi eligendi harum esse voluptate dolores explicabo?
      </p>
    </div>
  );
}
