import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Citizen Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <p>Email: {user?.email}</p>

      <p>Role: {user?.role}</p>

      <hr />

      <h3>What would you like to do?</h3>

      <button>
        Report an Issue
      </button>

      <button>
        My Complaints
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;