import React from "react";
import ShopData from "./shop-data";
import CollectionPreview from "../../components/collectionpreview/collection-preview.component";

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...OtherCollectionData }) => (
          <CollectionPreview key={id} {...OtherCollectionData} />
        ))}
      </div>
    );
  }
}
