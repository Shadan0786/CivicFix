import { useAuth } from "../../context/AuthContext";

const WorkerDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Field Worker Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <p>Email: {user?.email}</p>

      <p>Role: {user?.role}</p>

      <hr />

      <h3>Assigned Complaints</h3>

      <button>
        View Assigned Issues
      </button>

      <button>
        Update Issue Status
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default WorkerDashboard;