import Button from '../../UI/Button';
import classes from './Money.module.scss';
import Bitcoin from '../../../icons/Bitcoin';
import CashIcon from '../../../icons/CashIcon';
import MarketingIcon from '../../../icons/MarketingIcon';
import OperationsIcon from '../../../icons/OperationsIcon';
import ProductsIcon from '../../../icons/ProductsIcon';
import RoadSign from '../../../icons/RoadSign';
import SectionTitleHome from '../../UI/SectionTitleHome';

const Money = () => {
  return (
    <section id={`${classes.money} money`}>
      <div className="container">
        <SectionTitleHome
          main="Your Coach Will Help You"
          gold="Execute a 6-Step Growth Plan"
        />
        <p className={classes['top-text']}>
          Whether you need help with all 6 of these steps or just a few, our
          coaches can help.
        </p>
        <div className={classes.steps}>
          <div className={classes['steps__column']}>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}>
                  <RoadSign />
                </div>
              </div>
              <p>
                <span>LEADERSHIP: </span>Identify and prioritize 3 initiatives
                that will make your business more money.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}>
                  <Bitcoin />
                </div>
              </div>
              <p>
                <span>SALES: </span>Create a Sales conversation that will help
                you and your team confidently close more deals without being
                salesy.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}>
                  <OperationsIcon />
                </div>
              </div>
              <p>
                <span>OPERATIONS: </span>Install a management and productivity
                system that will keep your operation costs low and your
                productivity levels high.
              </p>
            </div>
          </div>
          <div className={classes['steps__column']}>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}>
                  <MarketingIcon />
                </div>
              </div>
              <p>
                <span>MARKETING: </span>Create a marketing funnel to generate
                consistent business and predictable cash flow.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}>
                  <ProductsIcon />
                </div>
              </div>
              <p>
                <span>PRODUCTS: </span>Perform profitability audits and install
                product briefs to ensure your product offering is highly
                lucrative.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}>
                  <CashIcon />
                </div>
              </div>
              <p>
                <span>CASH FLOW: </span>Learn to use 5 checking accounts so you
                can manage your finances with zero confusion or stress.
              </p>
            </div>
          </div>
        </div>
        <Button mode="gold" to="/coach" location="center">
          Find your Coach
        </Button>
      </div>
    </section>
  );
};

export default Money;
