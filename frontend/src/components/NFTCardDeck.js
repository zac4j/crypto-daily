import Image from "react-bootstrap/Image";

const NFTCardDeck = ({ data }) => {
  return (
    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="mb-4">Trending NFTs</h2>
        </div>
        <div class="card-deck d-block d-lg-flex">
          <div class="card mx-2 mb-4 mb-lg-0">
            <Image
              class="card-img-top"
              src={getLargePic(data[1].thumb)}
              alt=""
            />
            <div class="position-absolute m-2">
              <a class="badge badge-primary py-1 px-3" href="#">
                {data[1].floorPrice}
              </a>
            </div>
            <div class="card-body pt-3">
              <h5 class="card-title my-2">
                <a href="#">{data[1].symbol}</a>
              </h5>
              <p class="small card-text text-muted">{data[1].name}</p>
            </div>
          </div>
          <div class="col-lg-6 px-2 mb-4 mb-lg-0">
            <div class="card h-100 mx-0">
              <Image
                class="card-img img-fluid"
                src={getLargePic(data[0].thumb)}
                alt=""
              />
              <div class="card-img-overlay h-100 d-flex flex-column justify-content-between">
                <a
                  class="badge badge-primary align-self-start py-1 px-3"
                  href="#"
                >
                  {data[0].floorPrice}
                </a>
                <div class="align-self-end">
                  <h5 class="card-title my-2">
                    <a href="#">{data[0].symbol}</a>
                  </h5>
                  <p class="small card-text text-muted">{data[0].name}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mx-2 mb-4 mb-lg-0">
            <Image
              class="card-img-top"
              src={getLargePic(data[2].thumb)}
              alt=""
            />
            <div class="position-absolute m-2">
              <a class="badge badge-primary py-1 px-3" href="#">
                {data[2].floorPrice}
              </a>
            </div>
            <div class="card-body pt-3">
              <h5 class="card-title my-2">
                <a href="#">{data[2].symbol}</a>
              </h5>
              <p class="small card-text text-muted">{data[2].name}</p>
            </div>
          </div>
        </div>
        <div class="card-deck d-block d-lg-flex">
          {data.slice(3).map((nft) => (
            <div class="card m-2 mb-4 mb-lg-2">
              <Image class="card-img-top" src={getLargePic(nft.thumb)} alt="" />
              <div class="position-absolute m-2">
                <a class="badge badge-primary py-1 px-3" href="#">
                  {nft.floorPrice}
                </a>
              </div>
              <div class="card-body pt-3">
                <h5 class="card-title my-2">
                  <a href="#">{nft.symbol}</a>
                </h5>
                <p class="small card-text text-muted">{nft.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getLargePic(text) {
  return text.replace("small", "large");
}

export default NFTCardDeck;
