import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import client from "client";

import Figure from "components/shared/Figure";

const { projectId, dataset } = client.config();

function SimpleBlockContent(props) {
  const { blocks } = props;

  if (!blocks) return null;

  const serializers = {
    types: {
      figure: ({ node: props }) => <Figure {...props} />
    }
  };

  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={projectId}
      dataset={dataset}
    />
  );
}

export default SimpleBlockContent;
