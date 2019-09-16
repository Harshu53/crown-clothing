import React from "react";
import CollectionItem from "../collectionitem/collection-item.component";
import "../collectionpreview/collection-preview.styles.scss";

const collectionPreview = ({ title, items }) => (
  <div>
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...OtherCollectionItem }) => (
            <CollectionItem key={id} {...OtherCollectionItem} />
          ))}
      </div>
    </div>
  </div>
);

export default collectionPreview;
