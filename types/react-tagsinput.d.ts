declare module "react-tagsinput" {
  import * as React from "react";

  interface TagsInputProps {
    // Add the props of the component here
    value: string[];
    onChange: (tags: string[]) => void;
    // ... other props
  }

  const TagsInput: React.ComponentType<TagsInputProps>;

  export default TagsInput;
}
