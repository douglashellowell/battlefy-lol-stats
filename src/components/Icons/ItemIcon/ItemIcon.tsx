import styles from './ItemIcon.module.scss';

type ItemIconProps = {
  itemNumber: number;
};

const ItemIcon = ({ itemNumber }: ItemIconProps) => {
  const itemExists = itemNumber !== 0;

  return (
    <div className={styles.itemBox}>
      {itemExists ? <img src={`images/item/${itemNumber}.png`} /> : null}
    </div>
  );
};

export default ItemIcon;
