import React, { memo } from "react";

import { css } from "@emotion/react";
import { Button, Dropdown, Input, Modal, Table } from "semantic-ui-react";

import { CategoriesQuery, Color } from "@/graphql/generated";
import { useCategoryModal } from "@/hooks/useCategoryModal";

const colorOptions = Object.values(Color).map((colorName) => ({ value: colorName, text: colorName }));

export const CategoryModal = memo<{
  open: boolean;
  setOpen: (open: boolean) => void;
  refetchCategories: () => Promise<unknown>;
  categories: CategoriesQuery["categories"];
}>(({ open, setOpen, refetchCategories, categories }) => {
  const { isEditing, title, color, dispatch, handleAddCategory, handleDeleteCategory } = useCategoryModal({
    refetchCategories,
  });

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Modal.Header>Создать</Modal.Header>
      <Modal.Content scrolling>
        <div
          css={css`
            padding-bottom: 120px;
          `}
        >
          <Table
            striped
            unstackable
            css={css`
              min-width: 450px;
            `}
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Категории</Table.HeaderCell>
                <Table.HeaderCell>Цвет</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {categories.map(({ id, name, color }) => {
                return (
                  <Table.Row key={id}>
                    <Table.Cell>{name}</Table.Cell>
                    <Table.Cell>{color}</Table.Cell>
                    <Table.Cell textAlign="right">
                      <Button icon="trash alternate" color="red" onClick={() => handleDeleteCategory(id)} />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
              {isEditing ? (
                <Table.Row>
                  <Table.Cell>
                    <Input value={title} onChange={(e, d) => dispatch({ type: "setTitle", payload: d.value })} />
                  </Table.Cell>
                  <Table.Cell>
                    <Dropdown
                      options={colorOptions}
                      search
                      selection
                      value={color}
                      onChange={(e, d) => dispatch({ type: "setColor", payload: d.value as Color })}
                      css={css`
                        &&& {
                          min-width: 100px;
                        }
                      `}
                    />
                  </Table.Cell>
                  <Table.Cell textAlign="right">
                    <Button content="Добавить" color="blue" disabled={!title} onClick={handleAddCategory} />
                  </Table.Cell>
                </Table.Row>
              ) : (
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell textAlign="right">
                    <Button
                      content="Редактировать"
                      color="blue"
                      onClick={() => dispatch({ type: "setIsEditing", payload: true })}
                    />
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Отмена" onClick={() => setOpen(false)} />
      </Modal.Actions>
    </Modal>
  );
});
