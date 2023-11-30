import Button from '../../UI/Button';
import classes from './Money.module.scss';

const Money = () => {
  return (
    <section id={`${classes.money} money`}>
      <div className="container">
        <h2 className="section-title ">
          Your Coach Will Help You <span>Execute a 6-Step Growth Plan</span>
        </h2>
        <p className={classes['top-text']}>
          Whether you need help with all 6 of these steps or just a few, our
          coaches can help.
        </p>
        <div className={classes.steps}>
          <div className={classes['steps__column']}>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}></div>
              </div>
              <p>
                <span>LEADERSHIP: </span>Identify and prioritize 3 initiatives
                that will make your business more money.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}></div>
              </div>
              <p>
                <span>SALES: </span>Create a Sales conversation that will help
                you and your team confidently close more deals without being
                salesy.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}></div>
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
                <div className={classes.icon}></div>
              </div>
              <p>
                <span>MARKETING: </span>Create a marketing funnel to generate
                consistent business and predictable cash flow.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}></div>
              </div>
              <p>
                <span>PRODUCTS: </span>Perform profitability audits and install
                product briefs to ensure your product offering is highly
                lucrative.
              </p>
            </div>
            <div className={classes.step}>
              <div className={classes['icon-bgc']}>
                <div className={classes.icon}></div>
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
